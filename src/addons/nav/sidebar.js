import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';
import LogRegModule from '../modules/logReg';
import SideMenu from '../modules/SideMenu';
import { returnErr, clearErr } from '../../actions/errActs';

class Sidebar extends Component {

    componentDidMount() {
        this.props.getClients();
        this.props.clearErr();
    }

    render() {
        const { token, client, cl_auth } = this.props.client;
        console.log(cl_auth);
        let msg = "...";
        let col = "alert alert-warning";
        if (cl_auth === (null || false)) {

            msg = "Bitte einloggen ...";
            col = "alert alert-info";
            if (this.props.err.status === 404) {
                msg = this.props.err.msg; col = "alert alert-danger";
            }
            if (this.props.err.status === 400) {
                msg = this.props.err.msg; col = "alert alert-danger";
            }
        }

        return (

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" >
                <div id="logalerts" className={col} >{msg}</div>
                { cl_auth ? (
                    <SideMenu />
                ) :
                    (<div><LogRegModule /></div>)}
            </nav >
        );
    }
}

Sidebar.propTypes = {
    getClients: PropTypes.func.isRequired,
    clearErr: PropTypes.func.isRequired,
    client: PropTypes.object,
    isLogged: PropTypes.bool,
    err: PropTypes.object
}

const mapStateToProps = (state) => ({
    client: state.client,
    isLogged: state.client.isLogged,
    err: state.err
});

export default connect(mapStateToProps, { getClients, clearErr })(Sidebar);