import React, { Component } from 'react';
import { Form, Input, Button, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { doLog, doReg, doPinRec, doNikRec, doAct } from '../../actions/clientActs';
import { returnErr, clearErr } from '../../actions/errActs';
import PropTypes from 'prop-types';

class LogRegModule extends Component {

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);

    };

    onLog = e => {
        e.preventDefault();
        const newLog = {
            nik: this.state.lnik,
            pin: this.state.lpin,
        }
        this.props.doLog(newLog);
        this.props.clearErr();
        console.log("ON_LOG ACTION" + newLog.nik)
    };
    onReg = e => {
        e.preventDefault();
        const newReg = {
            name: this.state.name,
            lname: this.state.lname,
            age: this.state.age,
            country: this.state.country,
            _social: {
                _mobile: this.state._mobile,
                _email: this.state._email
            },
            nik: this.state.nik,
            pin: this.state.pin,
        }
        console.log(newReg);
        this.props.doReg(newReg);
    }
    onPinRec = e => {
        const newPinRec = {
            country: this.state.country,
            mobile: this.state.mobile,
            _email: this.state._email,
            _nik: this.state._nik
        }
        this.props.doPinRec(newPinRec);
    }
    onNikRec = e => {
        const newNikRec = {
            country: this.state.country,
            _mobile: this.state._mobile,
            _email: this.state._email,
        }
        this.props.doNikRec(newNikRec);
    }
    onAct = e => {
        const newAct = {
            nik: this.state.nik,
            pin: this.state.pin,
            act: this.state.act
        }
        this.props.doAct(newAct);
    }
    render() {

        return (
            <div>
                <div>
                    <Form onSubmit={this.onLog} >


                        <InputGroup>
                            <Input type="text" placeholder="Nik" onChange={this.onChange} id="lnik" name="lnik" />
                            <Input type="password" placeholder="Pin" onChange={this.onChange} id="lpin" name="lpin" />
                        </InputGroup>
                        <br />
                        <Button>Einloggen</Button>
                    </Form><Button>Pin Vergessen ?</Button><Button>Nik Vergessen ?</Button>
                </div>
                <div>
                    <Form onSubmit={this.onReg} >
                        <br />
            Registrieren<br /><br />
                        <InputGroup>
                            <Input type="text" placeholder="Vorname" onChange={this.onChange} id="lname" name="lname" />
                            <Input type="text" placeholder="Nachname" onChange={this.onChange} id="name" name="name" />
                        </InputGroup><InputGroup>
                            <Input type="text" placeholder="Geburtsjahr" onChange={this.onChange} id="age" name="age" />
                            <Input type="text" placeholder="Land" onChange={this.onChange} id="land" name="land" />
                        </InputGroup><InputGroup>
                            <Input type="text" placeholder="Mobil" onChange={this.onChange} id="_mobile" name="_mobile" />
                        </InputGroup><InputGroup>
                            <Input type="text" placeholder="Email" onChange={this.onChange} id="_email" name="_email" />
                        </InputGroup><InputGroup>
                            <Input type="text" placeholder="Benutzername" onChange={this.onChange} id="nik" name="nik" />
                            <Input type="password" placeholder="Passwort" onChange={this.onChange} id="pin" name="pin" />
                        </InputGroup>
                        <br />
                        <Button>Neu Anmelden</Button>

                    </Form>
                </div>
                <div><br />Aktivierung
                <br /><br />
                    <Form onSubmit={this.onAct} >
                        <InputGroup>
                            <Input type="text" placeholder="Aktivierungs-Code" onChange={this.onChange} id="act" name="act" />
                        </InputGroup>
                        <br />
                        <Button>Aktivieren</Button>
                    </Form>
                </div>
                <div><br />Benutzer bearbeiten
                <br /><br />
                    <Form onSubmit={this.onAct} >
                        <InputGroup>
                            <Input type="text" placeholder="Benutzer ID" onChange={this.onChange} id="uid" name="uid" />
                        </InputGroup>
                        <br />
                        <Button>Aktivieren</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

LogRegModule.propTypes = {
    doLog: PropTypes.func.isRequired,
    doReg: PropTypes.func.isRequired,
    doPinRec: PropTypes.func.isRequired,
    doNikRec: PropTypes.func.isRequired,
    doAct: PropTypes.func.isRequired,
    err: PropTypes.object.isRequired,
    returnErr: PropTypes.func.isRequired,
    clearErr: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    err: state.err
});

export default connect(mapStateToProps, { doLog, doReg, doPinRec, doNikRec, doAct, returnErr, clearErr })(LogRegModule);