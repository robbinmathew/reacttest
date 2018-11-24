import React, { Component } from "react";
import { Alert, Button, Glyphicon } from "react-bootstrap";

import ReactTable from "react-table";
import 'react-table/react-table.css'

import "./CountryTable.css";

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

    handleClickMinus(e, countryRow) {
        console.info("Clicked minus: " + countryRow.name);
        // The state info does not change the URL. How to udpate it??
        this.props.history.push('/countrydetails/'+countryRow.name+'/'+countryRow.capital+'/'+countryRow.numberOfStates,
            { from: 'minus'});
    }

    handleClickPlus(e, countryRow) {
        console.info("Clicked plus: " + countryRow.name);
        // The state info does not change the URL. How to udpate it??
        this.props.history.push('/countrydetails/'+countryRow.name+'/'+countryRow.capital+'/'+countryRow.numberOfStates,
            { from: 'plus'});
    }

    render() {
        const columns = [{
                id: 'Button',
                Header: 'Button',
                accessor: d => ( 'ops' ),
                Cell: row => (
                    // The row refers to the cell row. row.original contains the data given to the row
                    <>
                    <Button bsSize="small" onClick={(e) => this.handleClickPlus(e, row.original)}> <Glyphicon glyph="plus"/> </Button>
                    <Button bsSize="small" onClick={(e) => this.handleClickMinus(e, row.original)}> <Glyphicon glyph="minus"/> </Button>
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
