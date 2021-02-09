import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';
import LogRegModule from '../modules/logReg';
import SideMenu from '../modules/SideMenu';

class Sidebar extends Component {

    componentDidMount() {
          this.props.getClients();
    }

    render() {
        const { token, client, cl_auth } = this.props.client;
        console.log(client);
        return (

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                {cl_auth ? (
                    <SideMenu />
                ) :
                    (<div><LogRegModule /></div>)}
            </nav>
        );
    }
}

Sidebar.propTypes = {
    getClients: PropTypes.func.isRequired,
    client: PropTypes.object,
    isLogged: PropTypes.bool
}

const mapStateToProps = (state) => ({
    client: state.client,
    isLogged: state.client.isLogged
});

export default connect(mapStateToProps, { getClients })(Sidebar);