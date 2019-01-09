import React, { Component } from 'react';
import './App.css';
import ReactStrapTest from "./ReactStrapTest";
import Routes from "./Routes";
import {DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

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

  renderNavBar() {
    return (
      <div>
        <Navbar color="light" light expand="md">
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
  render() {
    return (
      <div className="App">
        { this.renderNavBar() }
        <Routes />
      </div>
    );
  }
}

export default App;
