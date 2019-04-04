import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBBtn } from "mdbreact";


const Wrapper = styled.div`
  position: absolute;

  top: calc( (${props => props.height}) - 100px);
  right: 30px;

  .icon {
    margin-top: 2px;
    height: 20px;
    width: 20px;
    color: white;
  }

  .rounded {
    border-radius: 50%;
    height: 50px !important;
    width: 50px !important;
    background-color: red;
    border: none;
  }

  .rounded:focus{
    outline: none;
  }
`;

class ListMapSwitch extends Component {

  state = {
      mapActive: true
  };

  handleClick = () => {
    this.setState({
        mapActive: !this.state.mapActive
    });
    console.log("mapActive: ", this.state.mapActive);
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <MDBBtn onClick={this.handleClick} color="danger" className="rounded">
          <FontAwesomeIcon icon={this.state.mapActive ? 'bars' : 'map'} className="icon"/>
        </MDBBtn>
      </Wrapper>
    );
  }
}

export default ListMapSwitch;
