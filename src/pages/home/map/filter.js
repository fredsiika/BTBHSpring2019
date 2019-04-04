import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBBtn } from "mdbreact";

const Wrapper = styled.div`
  position: absolute;

  top: 30px;
  right: 30px;

  .icon {
    margin-top: 3px;
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

class FilterIcon extends Component {
  render() {
    return (
      <Wrapper>
        <MDBBtn color="danger" className="rounded">
          <FontAwesomeIcon icon="filter" className="icon" />
        </MDBBtn>
      </Wrapper>
    );
  }
}

export default FilterIcon;
