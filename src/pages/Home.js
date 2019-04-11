import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Video from "../shared/video";
import ImageCard from "../shared/image-card";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

// const CREATE_STORY_MUTATION = gql`
//   mutation CreateStoryMutation($title: String!, $subtitle: String!) {
//     createStory(title: $title, subtitle: $subtitle) {
//       title
//       subtitle
//       id
//     }
//   }
// `;

const Wrapper = styled.div`
  margin-top: 60px;

  .test {
    padding-top: 15px;
    /* padding-right: 1px; */
    /* padding-left: 1px; */
    /* display: inline-block; */
  }
`;

class HomePage extends Component {
  state = {
    title: "test",
    subtitle: "test"
  };

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
            {this.props.restaurants.map((restaurant, index) => {
              return (
                <MDBCol key={index} className="test" size="6" sm="6" md="6" lg="4">
                  <ImageCard
                    url={restaurant.imageUrl}
                    thumbs={
                      restaurant.thumbsUpId.food +
                      restaurant.thumbsUpId.service +
                      restaurant.thumbsUpId.atmosphere || 0
                    }
                    name={restaurant.name}
                    id={restaurant.id}
                  />
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

// const CreatePageWithMutation = graphql(CREATE_STORY_MUTATION, {
//   name: "createStoryMutation"
// })(HomePage);
export default HomePage; //withRouter(CreatePageWithMutation);
