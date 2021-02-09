import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';


class SideMenu extends Component {

    componentDidMount() {

    }

    render() {
        const { isLogged } = this.props;
        return (
            <div className="position-sticky pt-3">
                <ListGroup className="nav flex-column">
                    <ListGroupItem className="nav-item">


                    </ListGroupItem>
                    <ListGroupItem className="nav-item">


                    </ListGroupItem>
                    <ListGroupItem className="nav-item">


                    </ListGroupItem>
                    <ListGroupItem className="nav-item">


                    </ListGroupItem>
                    <ListGroupItem className="nav-item">


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
            </div>
        );
    }
}

SideMenu.propTypes = {

}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(SideMenu);