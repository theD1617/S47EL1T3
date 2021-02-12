import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';


class SideMenu extends Component {

    onClick = (e) => {
        e.preventDefault();
        let alerts = document.getElementById("logalerts");
        alerts.innerHTML = e.target.id;
    }
    render() {
        const { isLogged } = this.props;
        return (
            <div className="position-sticky pt-3">
                <ListGroup className="nav flex-column">
                    <ListGroupItem className="nav-item">
                        <Button id="Produkte" color="light" onClick={this.onClick}>Produkte</Button>

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">
                        <Button id="Besucher" color="light" onClick={this.onClick}>Besucher</Button>

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">
                        <Button id="Bestellungen" color="light" onClick={this.onClick}>Bestellungen</Button>

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">
                        <Button id="Reklamation" color="light" onClick={this.onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
                                <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z" />
                            </svg>&nbsp;
                            Reklamation</Button>

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">
                        <Button id="Statistiken" color="light" onClick={this.onClick}>Statistiken</Button>

                    </ListGroupItem>
                </ListGroup>


                <ListGroup className="nav flex-column mt-2">
                    <ListGroupItem className="nav-item">

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">

                    </ListGroupItem>
                    <ListGroupItem className="nav-item">


                    </ListGroupItem>
                </ListGroup>
            </div >
        );
    }
}

SideMenu.propTypes = {

}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(SideMenu);