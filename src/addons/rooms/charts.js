import React, { Component } from 'react';
import { Form, Input, Button, InputGroup, Option } from 'reactstrap';
import { getItemQ } from '../../actions/itemActs.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Charts extends Component {

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);

    };

    onSeek = e => {
        e.preventDefault();
        const seekQ = {
            seek: this.state.seek,
            prod: this.state.produzent,
            name: this.state.duftname,
            code: this.state.code,
            gender: this.state.gender,
            year: this.state.year
        };
        console.log(seekQ);
        this.props.getItemQ(seekQ);
    }
    render() {

        const years = [];
        let x = 0;
        let i = 2021;
        while (i > 1920) {
            years[x] = i;
            i--;
            x++;
        }

        return (
            <div className="row mb-5" >
                <Form onSubmit={this.onSeek} >
                    <InputGroup>
                        <Input type="text" placeholder="Ihre Suche" onChange={this.onChange} id="seek" name="seek" className="col-6" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="select" name="produzent" onChange={this.onChange}>
                            <option name="default" value="...">Produzent</option>
                        </Input>
                        <Input type="select" name="duftname" onChange={this.onChange}>
                            <option name="default" value="...">Duft Name</option>
                        </Input>
                        <Input type="text" name="code" placeholder="Duftcode" onChange={this.onChange}>
                        </Input>
                        <Input type="select" name="gender" onChange={this.onChange}>
                            <option key="1" name="uni" value="UNI">UNI</option>
                            <option key="2" name="homme" value="HOMME">HOMME</option>
                            <option key="3" name="femme" value="FEMME">FEMME</option>
                        </Input>
                        <Input type="select" name="year" id="year" onChange={this.onChange}>
                            <option name="default" value="...">Erscheinungsjahr</option>
                            {years.map(year =>
                                <option key={year} name={year} value={year}>{year}</option>
                            )}
                        </Input>
                        <Button className="btn-info">Suchen</Button>
                    </InputGroup>

                </Form>
            </div >
        );
    }
}
Charts.propTypes = {
    getItemQ: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps, { getItemQ })(Charts);