import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
  state = {
    isOpen: false,
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render(){
    return (
    <div>
      <Navbar color = "dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Book Repository</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen = {this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    )
  }
}


export default AppNavbar;