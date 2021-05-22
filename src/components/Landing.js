import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

const Landing = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        {/*Navbar*/}
        <Navbar color="faded" light className="nav">
          <NavbarBrand href="/" className="mr-auto">
              <Button outline color="secondary">
                  Sign Up
              </Button>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" fixed="true" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/instructions/">Instructions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/FAQS/" >FAQs</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {/*title*/}
        <h1 className="text-center mt-5 pt-5 mb-3 pb-3 ml-2 mr-2 tittle">
          Malume
        </h1>

        {/*Slogan*/}
        <h4 className="text-center mb-5 slogan">let us take your kids to school</h4>
        
        {/*buttons*/}
        <Container>
          <Row>
            <Col
              xs={{ size: 10, offset: 2 }}
              md="6"
            >
              <Button outline size="lg">Register as a Parent</Button>
            </Col>
            <Col
              xs={{ size: 10, offset: 2 }}
              md="6"
            >
              <Button outline size="lg" >Register as a Parent</Button>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
};

export default Landing;