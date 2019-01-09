import React, { Component } from 'react';
import './App.css';
import ReactStrapTest from "./ReactStrapTest";
import Routes from "./Routes";
import {DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.dropDownButtonToggle = this.dropDownButtonToggle.bind(this);
    this.state = {
      dropDownButtonOpen: false
    };
  }

  dropDownButtonToggle() {
    this.setState({
      dropDownButtonOpen: !this.state.dropDownButtonOpen
    });
  }

  renderNavBar(bgColor) {
    return (
      <div>
        <Navbar color={bgColor} light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.dropDownButtonToggle} />
          <Collapse isOpen={this.state.dropDownButtonOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/layout">Layout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mobilelayout">mobileLayout</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  renderJumbotron() {
    return (
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      )
  }

  render() {
    return (
      <div className="App">
        { this.renderNavBar("primary") }
        { this.renderJumbotron() }
        { this.renderNavBar("secondary") }
        <Routes />
      </div>
    );
  }
}

export default App;
