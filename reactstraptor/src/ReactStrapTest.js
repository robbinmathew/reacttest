import React, { Component } from 'react';
import {Button, Alert, Badge, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

class ReactStrapTest extends Component {
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
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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

  renderMedia() {
    return (
      <Media list>
        <Media tag="li">
         <Media left href="#">
            <Media object src="media_64x64.png" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
           </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
              <Media left href="#">
                <Media object src="media_64x64.png" alt="Generic placeholder image" />
              </Media>
             <Media body>
                <Media heading>
                  Nested media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                <Media>
                  <Media left href="#">
                    <Media object src="media_64x64.png" alt="Generic placeholder image" />
                 </Media>
                  <Media body>
                    <Media heading>
                      Nested media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </Media>
                </Media>
              </Media>
           </Media>
            <Media>
              <Media left href="#">
                <Media object src="media_64x64.png" alt="Generic placeholder image" />
              </Media>
              <Media body>
               <Media heading>
                  Nested media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          </Media>
        </Media>
       <Media tag="li">
          <Media body>
            <Media heading>
              Media heading
           </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <Media right href="#">
            <Media object src="media_64x64.png" alt="Generic placeholder image" />
          </Media>
       </Media>
      </Media>
    );
  }

  renderCards() {
    return (
      <CardGroup>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       <Card>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       <Card>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
     </CardGroup>
   );
  }

  renderContainerLayout() {
    return (
      <Container fluid>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div className="ReactStrapTest">
        { this.renderNavBar() }
        { this.renderCards() }
        { this.renderContainerLayout() }
        { this.renderMedia() }
        <Button color="danger">Danger!</Button>
        <Button outline color="success">Success!</Button>
        <Button color="secondary" size="lg" block>Large block button</Button>
        <Button color="secondary" size="sm" block>Small block button</Button>
        <ButtonGroup>
          <Button color="primary" active={true}>One</Button>
          <Button color="primary" >Two</Button>
          <Button color="primary" >Three</Button>
        </ButtonGroup>

        <ButtonDropdown isOpen={this.state.dropDownButtonOpen} toggle={this.dropDownButtonToggle}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
           <DropdownItem header>Header</DropdownItem>
           <DropdownItem disabled>Action</DropdownItem>
           <DropdownItem>Another Action</DropdownItem>
           <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Alert color="primary"> This is a primary alert  check it out!  </Alert>
        <Alert color="secondary"> Alert link <a href="#" className="alert-link">click here</a> </Alert>
        <Badge color="warning">warning badge</Badge>
        <Badge color="info" pill>pill badge</Badge>

      </div>
    );
  }
}

export default ReactStrapTest;

