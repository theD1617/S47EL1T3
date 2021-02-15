import React, { Component } from 'react';
import { Form, Input, Button, InputGroup, Option } from 'reactstrap';
class Charts extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <Form onSubmit={this.onAct} >
                    <InputGroup>
                        <Input type="text" placeholder="Ihre Suche" onChange={this.onChange} id="seek" name="seek" className="col-6" />
                        <Button className>Suchen</Button>
                    </InputGroup>
                    <InputGroup>
                        <Input type="select" name="produzent">
                            <option name="default" value="...">Produzent</option>
                        </Input>
                        <Input type="select" name="duftname">
                            <option name="default" value="...">Duft Name</option>
                        </Input>
                        <Input type="select" name="code">
                            <option name="default" value="...">Duft Code</option>
                        </Input>
                        <Input type="select" name="gender">
                            <option name="default" value="...">Gender</option>
                        </Input>
                        <Input type="select" name="year">
                            <option name="default" value="...">Erscheinungsjahr</option>

                        </Input>
                        <Button className>Suchen</Button>
                    </InputGroup>

                </Form>
            </div>
        );
    }
}

export default Charts;