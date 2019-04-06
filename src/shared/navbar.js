import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`

  .navbar-button{
    color: white !important;
  }

  .navbar-button:visited{
    color: white;
  }

  .navbar-button:link{
    color: white;
  }

  .navbar-button:hover{
    color: white;
  }

  .navbar-button:active{
    color: white;
  }

  .title{
    padding-top: 5px;
    font-family: 'Lobster Two', cursive;
    font-size: 18px;
  }
`;


class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Wrapper>

      <MDBNavbar fixed="top" color="red" dark expand>
      <MDBContainer>

        <MDBNavbarToggler  onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center="true">

            <MDBNavItem active>
              <Link className="navbar-button" to="/map">
              <MDBIcon icon="map" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="navbar-button" to="/list">
              <MDBIcon icon="bars" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="navbar-button title" to="/">localateur</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="navbar-button" to="/filter">
              <MDBIcon icon="filter" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="navbar-button" to="profile">
              <MDBIcon icon="user-circle" />
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      
      </Wrapper>
    );
  }
}

export default Navbar;
