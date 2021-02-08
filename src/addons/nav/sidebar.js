import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';
import LogRegModule from '../modules/logReg';
import SideMenu from '../modules/SideMenu';

class Sidebar extends Component {

    componentDidMount(){
        this.props.getClients();
    }

    render() { 
        const { isLogged, clients } = this.props;
        return ( 
            
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                {isLogged ? (
                    <SideMenu />
                ) : 
                (<div><LogRegModule clients={clients} /><SideMenu /></div> )}
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
    isLogged: state.isLogged
});
 
export default connect(mapStateToProps,{ getClients })(Sidebar);