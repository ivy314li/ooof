import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class TopBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" sticky="top">
        <Navbar.Brand href="home">don't inject bleach</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="about">what is this</Nav.Link>
            <Nav.Link href="https://twitter.com/LaurenWern/status/1253499872134782979">why is this important</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default TopBar;
