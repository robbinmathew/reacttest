import React, { Component } from 'react';
import './App.css';
import ReactStrapTest from "./ReactStrapTest";
import Routes from "./Routes";
import {DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon, InputGroupText} from 'reactstrap';
import { Container, Form, Row, Col, FormGroup, Label} from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';

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
            {/* For the text input field and button*/}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <InputGroup >
                  <Input placeholder="Searc bar..." />
                  <InputGroupAddon addonType="append">
                    <Button color="success">To the Right!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
            </Nav>

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
  renderCard() {
    return (
        <CardImg top width="100%" className="rounded"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" 
           alt="Card image cap" />
    );
  }

  renderJumbotron1() {
    return (
      <Jumbotron>
        <Row>
        <Col xs="2" sm="2" md="2" lg="2" xl="2">
        </Col>
        <Col xs="10" sm="10" md="10" lg="10" xl="10">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Col>
        </Row>
        <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
        { this.renderNavBar("secondary") }
        </Col>
        </Row>
      </Jumbotron>
      )
  }

  renderJumbotron() {
    return (
      <Jumbotron>
        {this.renderMedia( "bg-dark")}
        { this.renderNavBar("secondary") }
      </Jumbotron>
      )
  }
  renderJumbotron2() {
    return (
      <>
        {this.renderMedia( "bg-dark")}
        { this.renderNavBar("secondary") }
      </>
      )
  }

  renderMedia( bgColorClass ) {
    return (
        <Media tag="li" className={bgColorClass} >
          <Media left href="#">
            <Media object src="media_64x64.png" alt="Generic placeholder image" className="rounded-circle"/>
          </Media>
          {/*Media body done*/}
        </Media>
    );
  }

  renderHome() {
    return (
      <Row>
        <Col xs="0" sm="0" md="1" lg="1" xl="1">
        </Col>
        <Col xs="2" sm="2" md="2" lg="2" xl="2">
          <br />
          <CardGroup>
            { this.renderCard() }
          </CardGroup>
        </Col>
        <Col xs="8" sm="8" md="8" lg="8" xl="8">
          <br />
          { this.renderJumbotron() }
        </Col>
        <Col xs="0" sm="0" md="1" lg="1" xl="1">
        </Col>
      </Row>
    );
  }
  render() {
    return (
      <div className="App">
        { this.renderNavBar("primary") }
        { this.renderJumbotron() }
        <Routes />
      </div>
    );
  }
}

export default App;
