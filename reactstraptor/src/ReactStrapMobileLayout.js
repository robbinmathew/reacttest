import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {Button, Alert, Badge, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class ReactStrapMobileLayout extends Component {
  render() {
    return (
      <Container fluid flex flexCol justifyContent="center" className="bg-danger">
        <Row fullHeight justifyContent="center" className="bg-danger">
          <Col fullHeight className="bg-dark">
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
        </Row>
      </Container>
    );
  }
}


export default ReactStrapMobileLayout;

