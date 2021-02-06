import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActs';
import PropTypes from 'prop-types';

class Action extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    render() { 
        const {items} = this.props.item;
        return ( 
            <div className="table-responsive">
                <ListGroup className="list-group container-fluid">
                {items.map(item => (
                    <ListGroupItem key={item._id}  className="list-group-item" >
                    {item.code+" | "+item.prod+" - "+item.name+' :: '+item._id}
                    </ListGroupItem>
                ))}
                </ListGroup>

            </div>
         );
    }
}

Action.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});
 
export default connect(mapStateToProps, { getItems })(Action);