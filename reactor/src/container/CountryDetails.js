import React, { Component } from "react";

export default class CountryDetails extends Component {
    render() {
        if(this.props.location.state === undefined) {
            // This means that we can directly based of the URL, not redirected within react
            // HOW TO UPDATE the URL?
            this.props.history.push('/');
            return (
                <div className="CountryDetails">
                    <h2>Redirecting...  </h2>
                </div>
                );
        }

        return (
        <div className="CountryDetails">
            <h2>Country: {this.props.location.state.row.name}</h2>
            <p>from: {this.props.location.state.from}</p>
            <p>Capital: {this.props.location.state.row.capital}</p>
            <p># of states: {this.props.location.state.row.numberOfStates}</p>
        </div>
        );
    }
}

