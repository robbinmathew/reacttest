import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {Button, Alert, Badge, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import "./ReactStrapLayout.css"

class ReactStrapLayout extends Component {

  render() {
    return (
      <Container fluid flex flexCol justifyContent="center" className="bg-danger">
        <Row fullHeight justifyContent="center" className="bg-danger">
          <Col fullHeight xs="6" className="bg-dark">
            <Card
                fullHeight
                flexRow
                alignItems="center"
                style={{ overflowX: "auto" }}
                body
           >
          <CardBody>
           <CardTitle>Card title</CardTitle>
          </CardBody>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <div>
                <ul>
                  <li>
                  Its possible to write text here
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs="6">
            <Row className="bg-warning">
              <Col xs="auto">.col-auto - vaco</Col>
              <Col>
                <img src="media_64x64.png" align="right" class="Profile-image" alt="Profile image" />
              </Col>
            </Row>
            <Row className="bg-success">
              <Col xs="12" sm="12"><h3>H3 font: Date and time </h3></Col>
            </Row>
            <Row className="bg-dark">
              <Col xs="12" sm="12"><h3>H3 fontPlace sm-4</h3></Col>
            </Row>
            <Row className="bg-light" justifyContent="center">
              <Col xs="12">
                <ButtonGroup>
                  <Button color="primary" >One</Button>
                  <Button color="primary" >Two</Button>
                  <Button color="primary" >Three</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row fullHeight justifyContent="center" className="bg-danger">
              <Col xs="9">
                <img src="media_64x64.png" align="left" class="card" alt="Profile image" />
              </Col>
              <Col xs="3">
                <ButtonGroup>
                  <Button color="primary" >send</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="bg-secondary" justifyContent="center">
              <Col xs="9">
                <img src="media_64x64.png" align="left" class="card" alt="Profile image" />
              </Col>
              <Col xs="3">
                <ButtonGroup>
                  <Button color="primary" >send</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-danger">
          <Col xs="6">
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          </Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
      </Container>
    );
  }
}

export default ReactStrapLayout;
