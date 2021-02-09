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
                        <Button id="Reklamation" color="light" onClick={this.onClick}>Reklamation</Button>

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