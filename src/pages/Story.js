import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import Carousel from "../shared/carousel";

const Wrapper = styled.div`
  margin-top: 60px;

  .test {
    border: 1px solid black;
  }
`;

class StoryPage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
          <MDBCol className="test" sm="12" >
            <Carousel/>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol className="test" sm="12" >test</MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol className="test" sm="12" >test</MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol className="test" sm="6">
          </MDBCol>
            <MDBCol className="test" sm="6">
              <MDBRow>
                <MDBCol className="test green" sm="12">test</MDBCol>
                </MDBRow>
              <MDBRow>
              <MDBCol className="test red" sm="6">test</MDBCol>
              <MDBCol className="test red" sm="6">test</MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default StoryPage;
