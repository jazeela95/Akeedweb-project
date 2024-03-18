import React from 'react'
import {  Nav, NavDropdown,Button } from 'react-bootstrap';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div style={{ display: "flex" }}>
        <div className='logoname' style={{ flex: "1", textAlign: "left" }}>cosmalical</div>
      </div>
      <div style={{ width: "900px", position: "relative", overflow: "hidden", display: "flex", flex: '1' }}>
        <Navbar expand="lg" className="navbar-body-tertiary">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto font-size-18">
              <NavDropdown title="Home" id="home-dropdown">
                <NavDropdown.Item href="#">Home Demo1</NavDropdown.Item>
                <NavDropdown.Item href="#">Home Demo2</NavDropdown.Item>
                <NavDropdown.Item href="#">Home Demo3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shop" id="shop-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Product" id="product-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navbar