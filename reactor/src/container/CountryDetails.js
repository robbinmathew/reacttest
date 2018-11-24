import React, { Component } from "react";
import { PageHeader, Well, Panel } from "react-bootstrap";

export default class CountryDetails extends Component {
    constructor(props) {
        super(props);

        this.showOptionalFrom = this.showOptionalFrom.bind(this);
    }

    showOptionalFrom() {
        if(this.props.location.state !== undefined ) {
            return (<Well>from: {this.props.location.state.from}</Well>)
        }
    }

    render() {
        return (
        <div className="CountryDetails">
            <PageHeader>
                <h2>{this.props.match.params.name}</h2>
            </PageHeader>

            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Capital</Panel.Title>
                </Panel.Heading>
                 <Panel.Body> {this.props.match.params.capital} </Panel.Body>
            </Panel>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Number of states/provinces</Panel.Title>
                </Panel.Heading>
                 <Panel.Body> {this.props.match.params.ns} </Panel.Body>
            </Panel>
            {this.showOptionalFrom() }
        </div>
        );
    }
}

