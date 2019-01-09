import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {Button, Alert, Badge, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Media } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon, InputGroupText} from 'reactstrap';

class ReactStrapMobileLayout extends Component {
  renderMedia( bgColorClass ) {
    return (
      <Media list>
        <Media tag="li" className={"rounded " + bgColorClass} >
          <Media left href="#">
            <Media object src="media_64x64.png" alt="Generic placeholder image" className="rounded-circle"/>
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit all sikca most amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          {/*Media body done*/}
        </Media>
        {/*Media tag done*/}
      </Media>
    );
  }

  renderCard() {
    return (
      <Card>
        <CardBody>
          <CardTitle>My card title </CardTitle>
        </CardBody>
        <CardImg top width="100%" className="rounded"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" 
           alt="Card image cap" />
        <CardBody>
          <CardTitle>March 35, 2122</CardTitle>
          <CardTitle>Mars</CardTitle>

          <Alert color="secondary">
            Alert link <a href="#" className="alert-link">click here</a> 
            <br />
            <Badge color="info" pill>pill badge</Badge>

            <br />
            <ButtonGroup>
              <Button color="primary" >One</Button>
              <Button color="primary" >Two</Button>
              <Button color="primary" >Three</Button>
            </ButtonGroup>
          </Alert>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Check it out" />
          </InputGroup>

          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>To the Left!</Button>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <br />
          <InputGroup>
            <InputGroupAddon addonType="append">
              <Button color="success">To the right!</Button>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button color="danger">To the Left!</Button>
            </InputGroupAddon>
            <Input placeholder="and..." />
            <InputGroupAddon addonType="append">
              <Button color="success">To the Right!</Button>
            </InputGroupAddon>
          </InputGroup>

        </CardBody>
        { this.renderMedia("bg-warning") }
        { this.renderMedia("bg-success") }
      </Card>
    );
  }

  renderRow() {
    /*
      Extra small:  xs min-width=0
      Small:        sm min-width=576
      Medium:       md min-width=768
      Large:        lg min-width=992
      Extra Large:  xl min-width=1200
      xs upto 0
    */
    return (
      <Row>
        <Col xs="0" sm="0" md="1" lg="0" xl="1">
        </Col>
        <Col xs="12" sm="12" md="10" lg="7" xl="6">
          <br />
          <CardGroup>
            { this.renderCard() }
          </CardGroup>
        </Col>
        <Col xs="0" sm="0" md="0" lg="4" xl="4">
          <br />
          { this.renderMedia("bg-danger") }
          { this.renderMedia("bg-dark") }
        </Col>
        <Col xs="0" sm="0" md="1" lg="0" xl="1">
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Container fluid className="bg-light">
        {this.renderRow() }
        {this.renderRow() }
        {this.renderRow() }
        {this.renderRow() }
      </Container>
    );
  }
}


export default ReactStrapMobileLayout;

