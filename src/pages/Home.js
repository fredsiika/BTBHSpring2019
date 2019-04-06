import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem
} from "mdbreact";
import styled from "styled-components";
import Video from "../shared/video";
import ImageCard from "../shared/image-card";

const Wrapper = styled.div`
  margin-top: 60px;

  .test {
    padding-top: 15px;
    /* padding-right: 1px; */
    /* padding-left: 1px; */
    display: inline-block;
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
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
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
                        <ImageCard
                          url={
                            "https://assets3.thrillist.com/v1/image/2785413/size/gn-gift_guide_variable_c.jpg"
                          }
                          thumbs={739}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"El Limoncito"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBRow>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBRow>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
                      </MDBCol>
                      <MDBCol className="test" size="4">
                        <ImageCard
                          url={
                            "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                          }
                          thumbs={831}
                          name={"Joe's Bar & Grill"}
                        />
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
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
            <MDBCol className="test" size="6">
              <ImageCard
                url={"https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"}
                thumbs={831}
                name={"Joe's Bar & Grill"}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default HomePage;
