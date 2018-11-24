import React, { Component } from "react";
import { Alert, Button, Glyphicon } from "react-bootstrap";

import ReactTable from "react-table";
import 'react-table/react-table.css'

import "./CountryTable.css";

export default class CountryTable extends Component {
    constructor(props) {
        super(props);

        const countriesData = [{
                name: 'Australia',
                capital: 'Canberra',
                numberOfStates: 6
            }, {
                name: 'Brazil',
                capital: 'Brasilia',
                numberOfStates: 26
            }, {
                name: 'Canada',
                capital: 'Ottawa',
                numberOfStates: 12
            }, {
                name: 'Denmark',
                capital: 'Copenhagen',
                numberOfStates: 5
            }, {
                name: 'Egypt',
                capital: 'Cairo',
                numberOfStates: 27
            }, {
                name: 'Mexico',
                capital: 'Mexico City',
                numberOfStates: 31
            }, {
                name: 'USA',
                capital: 'Washington DC',
                numberOfStates: 50
            }];

        this.state = {
            countriesData: countriesData
        };


       this.handleClickPlus = this.handleClickPlus.bind(this);
       this.handleClickMinus = this.handleClickMinus.bind(this);
       this.tableStringFieldFilter= this.tableStringFieldFilter.bind(this);
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

    tableStringFieldFilter(filter, row) {
        console.info("Clicked tableStringFieldFilter: " + filter.value);
        let field = String (row[filter.id].toLowerCase());

        if (field.search(filter.value.toLowerCase()) < 0)
            return false;
        return true;
    }

    render() {
        const columns = [{
                id: 'Button',
                Header: 'Button',
                filterable: false,
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
                filterable: false,
                accessor: d => {return (<Alert bsStyle="danger"> custom text</Alert>);} // Custom value accessors!
            }, {
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, {
                Header: 'Capital',
                accessor: 'capital',
            }, {
                Header: '# of States',
                filterable: false,
                accessor: 'numberOfStates',
            }];

        return (
                <ReactTable
                    data={this.state.countriesData}
                    filterable
                    defaultFilterMethod={this.tableStringFieldFilter}
                    columns={columns}
                    className="-striped -highlight"
                />);
    }
}
