import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBModal
} from "mdbreact";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FilterPage from "../pages/Filter";

const Wrapper = styled.div`
  .navbar-button {
    color: white !important;
  }

  .navbar-button:visited {
    color: white;
  }

  .navbar-button:link {
    color: white;
  }

  .navbar-button:hover {
    color: white;
  }

  .navbar-button:active {
    color: white;
  }

  .title {
    font-family: "Lobster Two", cursive;
    font-size: 20px;
    letter-spacing: px;
  }
`;

class Navbar extends Component {
  state = {
    isOpen: false,
    filterIsOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleFilter = () => {
    this.setState({
      filterIsOpen: true
    });
  };

  handleClose = () => {
    console.log("handleClose ran");
    this.setState({
      filterIsOpen: false
    });
  };

  render() {
    return (
      <Wrapper>
        <MDBNavbar fixed="top" color="red" dark expand>
          <MDBContainer>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav center="true">
                <MDBNavItem className="mt-1" active>
                  <Link className="navbar-button button" to="/map">
                    <MDBIcon icon="map" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem className="mt-1">
                  <Link className="navbar-button button" to="/list">
                    <MDBIcon icon="bars" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem className="">
                  <Link className="navbar-button button title" to="/">
                    Localateur
                  </Link>
                </MDBNavItem>
                <MDBNavItem className="mt-1">
                  <div
                    className="navbar-button button"
                    onClick={this.handleFilter}
                  >
                    <MDBIcon icon="filter" />
                  </div>
                </MDBNavItem>
                <MDBNavItem className="mt-1">
                  <Link className="navbar-button button" to="/profile">
                    <MDBIcon icon="user-circle" />
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <MDBModal
          centered
          isOpen={this.state.filterIsOpen}
          toggle={this.handleClose}
        >
          <FilterPage closeFilter={this.handleClose} />
        </MDBModal>
      </Wrapper>
    );
  }
}

export default Navbar;
