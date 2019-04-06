import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact";
import styled from "styled-components";
import Video from "../shared/video";
import ImageCard from "../shared/image-card";

const Wrapper = styled.div`
  margin-top: 15px;

  .test {
    padding-top: 15px;
    /* margin-left: 0; */
    /* padding-right: 0; */
    /* padding-left: 0; */
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Video />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="test" size="12">
              <ImageCard />
            </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol size='12'>
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={false}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBRow>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBRow>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBRow>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBRow>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                    <MDBCol className="test" size="4">
                      <ImageCard />
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default HomePage;
