import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActs';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';

class Action extends Component {

    componentDidMount() {
        this.props.getClients();
        this.props.getItems();
    }

    render() {
        const { clients } = this.props.client;
        const { items } = this.props.item;
        return (<div className="row">
            <div className="table-responsive col-6">
                <ListGroup className="list-group container-fluid">
                    {clients.map(client => (
                        <ListGroupItem key={client._id} className="list-group-item" >
                            {client.nik + " | " + client.age + " - " + client._ehash + ' :: ' + client._id}
                        </ListGroupItem>
                    ))}
                </ListGroup>

            </div>
            <div className="table-responsive col-6">
                <ListGroup className="list-group container-fluid">
                    {items.map(item => (
                        <ListGroupItem key={item._id} className="list-group-item" >
                            {item.code + " | " + item.prod + " - " + item.name + ' :: ' + item._id}
                        </ListGroupItem>
                    ))}
                </ListGroup>

            </div>
        </div>
        );
    }
}

Action.propTypes = {
    getItems: PropTypes.func.isRequired,
    getClients: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    client: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    client: state.client
});

export default connect(mapStateToProps, { getItems, getClients })(Action);