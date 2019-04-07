import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem
} from "mdbreact";
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import Video from "../shared/video";
import ImageCard from "../shared/image-card";

import { graphql } from 'react-apollo';
import gpl from 'graphql-tag';

const CREATE_STORY_MUTATION = gpl`
  mutation CreateStoryMutation($title: String!, $subtitle: String!) {
    createStory(title: $title, subtitle: $subtitle) {
      title
      subtitle
      id
    }
  }
`;

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

  state = {
    title: "test",
    subtitle: "test"
  }

  handleUpdate = async () => {
    console.log("clicked");
    const {title, subtitle} = this.state;
    await this.props.createStoryMutation({variables: {title, subtitle}})
    .then((ret) => {
      console.log(ret.data.createStory.id)
    });
    this.props.history.replace('/');
  }

  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Video />
              <button onClick={this.handleUpdate}
               className="btn btn-primary"></button>
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

const CreatePageWithMutation = graphql(CREATE_STORY_MUTATION, {name: 'createStoryMutation'})(HomePage)
export default withRouter(CreatePageWithMutation);