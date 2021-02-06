import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form, Input, Button, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getClients } from '../../actions/clientActs';
import PropTypes from 'prop-types';

class LogRegModule extends Component {

    componentDidMount(){
        
    }

    render() { 
        const { isLogged } = this.props;
        return ( 
            <div>
            <Form>
                <br/>
                Einloggen<br/><br/>
                <InputGroup>
                <Input placeholder="Benutzername"></Input>
                <Input placeholder="Passwort" ></Input>
                </InputGroup>
                <br/>
                <Button>Einloggen</Button>
            </Form>
            <Form>
            <br/>
            Registrieren<br/><br/>
            <InputGroup>
            <Input placeholder="Vorname" ></Input>
            <Input placeholder="Nachname" ></Input>
            </InputGroup><InputGroup>
            <Input placeholder="Geburtsjahr"></Input>
            <Input placeholder="Land" ></Input>
            </InputGroup><InputGroup>
            <Input placeholder="Email"></Input>
            </InputGroup><InputGroup>
            <Input placeholder="Mobil" ></Input>
            </InputGroup><InputGroup>
            <Input placeholder="Benutzername"></Input>
            <Input placeholder="Passwort" ></Input>
            </InputGroup>
            <br/>
            <Button>Neu Anmelden</Button>

        </Form>
        </div>
         );
    }
}

LogRegModule.propTypes = {

}

const mapStateToProps = (state) => ({

});
 
export default connect(mapStateToProps,{  })(LogRegModule);