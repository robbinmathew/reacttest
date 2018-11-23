import React, { Component } from "react";
import { Alert, Button, Glyphicon } from "react-bootstrap";

import "./CountryTable.css";
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class CountryTable extends Component {
    constructor(props) {
        super(props);

        const countriesData = [{
                name: 'USA',
                capital: 'Washington DC',
                numberOfStates: 50
            }, {
                name: 'Canada',
                capital: 'Ottawa',
                numberOfStates: 12
            }, {
                name: 'Mexico',
                capital: 'Mexico City',
                numberOfStates: 31
            }];

        this.state = {
            countriesData: countriesData
        };


       this.handleClickPlus = this.handleClickPlus.bind(this);
       this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickMinus(e, row) {
        console.info("Clicked minus: " + row.original.name);
        // The state info does not change the URL. How to udpate it??
        this.props.history.push('/countrydetails', { from: 'minus', row: row.original })
    }

    handleClickPlus(e, row) {
        console.info("Clicked plus: " + row.original.name);
        this.props.history.push('/countrydetails', { from: 'plus', row: row.original })
    }

    render() {
        const columns = [{
                id: 'Button',
                Header: 'Button',
                accessor: d => ( 'ops' ),
                Cell: row => (
                    // The row refers to the cell row. row.original contains the data given to the row
                    <>
                    <Button bsSize="small" onClick={(e) => this.handleClickPlus(e, row)}> <Glyphicon glyph="plus"/> </Button>
                    <Button bsSize="small" onClick={(e) => this.handleClickMinus(e, row)}> <Glyphicon glyph="minus"/> </Button>
                    </>
                 )
            }, {
                id: 'Alert',
                Header: 'Alert',
                accessor: d => {return (<Alert bsStyle="danger"> custom text</Alert>);} // Custom value accessors!
            }, {
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, {
                Header: 'Capital',
                accessor: 'capital',
            }, {
                Header: '# of States',
                accessor: 'numberOfStates',
            }];

        return (
                <ReactTable
                    data={this.state.countriesData}
                    columns={columns}
                    className="-striped -highlight"
                />);
    }
}
