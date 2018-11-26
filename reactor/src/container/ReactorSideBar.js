import React, {Component} from 'react';
import { Nav, Modal, NavItem, Button, Glyphicon} from 'react-bootstrap';
//import Sidebar from 'react-bootstrap-sidebar';

import "./ReactorSideBar.css";
class Sidebar extends Component {
    render() {
        return (
            <Modal className='menu-sidebar left' show={this.props.isVisible} onHide={this.props.onHide} autoFocus keyboard>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
            </Modal>
        );
    }

}

export default class ReactorSideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isVisible: false,
        };
    }

    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }

    render() {
        return (
              <div>
                  <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
                   <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
                  </Sidebar>
              </div>
        );
    }
}

