import React, { Component } from "react";
import { Alert, Button, Glyphicon } from "react-bootstrap";

import "./CountryTable.css";
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class CountryTable extends Component {

    render() {
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

        const columns = [{
                id: 'Button',
                Header: 'Button',
                accessor: d => {return (<Button bsSize="small">
                    <Glyphicon glyph="star"/>
                    </Button>);} // Custom value accessors!
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
                    data={countriesData}
                    columns={columns}
                    className="-striped -highlight"
                />);
    }
}
