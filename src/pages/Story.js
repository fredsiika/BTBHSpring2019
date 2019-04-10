import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import Carousel from "../shared/carousel";
// import ImageCard from "../shared/image-card";
import Amenity from "../shared/amenity";

const Wrapper = styled.div`
  margin-top: 60px;

  .story-header{
    height: 100%;
    margin-bottom: 15px;
  }

  .story-image{
    height: 100%;
    width: 100%;
    border-radius: 3px;
    float: right;
    object-fit: cover;
  }

  .story-restaurant-name{
    font-weight: 500;
    font-size: 18px;
  }

  .story-category{
    color: white;
    border-radius: 3px;
    font-size: 14px;
    padding: 5px;
    width: 85px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  
  .story-amenity-container{
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .story-menu{
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px;
  }

  .story-menu-container{
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .question-image{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 3px;
  }

  hr{
    margin-top: 0px;
    margin-bottom: 15px;
  }

  .question-title{
    font-size: 18px;
    font-weight: 400;
  }

  .question-reply{
    font-size: 12px;
  }

  .question-container{
    margin-bottom: 15px;
  }
`;

class StoryPage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow className="story-header">
            <MDBCol size="5" sm="5">
              <img className="story-image" src="http://www.arabnews.com/sites/default/files/styles/n_670_395/public/2017/09/23/999216-213334383.jpg?itok=ofqNCPqO"  />
            </MDBCol>
            <MDBCol size="7" sm="7">
              <MDBRow>
                <MDBCol size="12" className="story-restaurant-name">Joe's Bar & Grill</MDBCol>
                <MDBCol size="12" ><h5 className="story-category red">Bar & Tapas</h5></MDBCol>
                <MDBCol size="12">1234 This Address</MDBCol>
                <MDBCol size="12">Newark, CA 12345</MDBCol>
                <MDBCol size="12">1 (123) 123-4567</MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="8">
            <div className="story-amenity-container">
              <Amenity name="keto"/>
              <Amenity name="wifi"/>
              <Amenity name="vegan"/>
              <Amenity name="vegetarian"/>
            </div>
            </MDBCol>
            <MDBCol size="4">
              <div className="story-menu-container">
                <h5 className="story-menu">
                  MENU
                </h5>
              </div>
            </MDBCol>
          </MDBRow>
          <hr/>
          <MDBRow>
            <MDBCol>
              <Carousel />
            </MDBCol>
          </MDBRow>
          <hr/>
          <MDBRow>
            <MDBCol>
              <MDBRow className="question-container">
                <MDBCol size="4">
                  <img className="question-image" src="https://www.nbnco.com.au/content/dam/nbnco2/images/blog/new/sme-bar-owner-03-1043.jpg.transform/w1440/optimized/image.jpg" />
                </MDBCol>
                <MDBCol size="8">
                  <MDBRow>
                    <MDBCol>
                    <h5 className="question-title">
                      Meet The Owner, Joe!
                    </h5>
                    </MDBCol>                  
                  </MDBRow>
                  <MDBRow>
                  <MDBCol>
                    <p className="question-reply">
                      Originally from Spain, he moved here 25 years ago,
                      and brought with him his love for tapas and spanish
                      hospitality.
                    </p>
                  </MDBCol>                  
                </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow className="question-container">
                <MDBCol size="8">
                  <MDBRow>
                    <MDBCol>
                    <h5 className="question-title">
                      What is your favorite dish?
                    </h5>
                    </MDBCol>                  
                  </MDBRow>
                  <MDBRow>
                  <MDBCol>
                    <p className="question-reply">
                      I love Patas Bravas! They are creamy and spicy. They remind me of my mother's cooking back home.
                    </p>
                  </MDBCol>                  
                </MDBRow>
                </MDBCol>
                <MDBCol size="4">
                  <img className="question-image" src="data:image/jpeg;base64,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" />
                </MDBCol>
              </MDBRow>
              <MDBRow className="question-container">
              <MDBCol size="4">
                <img className="question-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GlIU1JI_8RQKjIwcSoHGls9QS9zTepM5m2GSGikiY5Bvh72G" />
              </MDBCol>
              <MDBCol size="8">
                <MDBRow>
                  <MDBCol>
                  <h5 className="question-title">
                    What is your favorite part of the job?
                  </h5>
                  </MDBCol>                  
                </MDBRow>
                <MDBRow>
                <MDBCol>
                  <p className="question-reply">
                    Being able to see everyone smiling after enjoying a meal is what brings me into work everyday.
                  </p>
                </MDBCol>                  
              </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="question-container">
                <MDBCol size="8">
                  <MDBRow>
                    <MDBCol>
                    <h5 className="question-title">
                      What inspires you at work?
                    </h5>
                    </MDBCol>                  
                  </MDBRow>
                  <MDBRow>
                  <MDBCol>
                    <p className="question-reply">
                      The face new customers make when they have tried something new, something outside of their normal everyday meals. Or, when they tell me they have decided this is their new favorite place and we build a relationship as they come back.
                    </p>
                  </MDBCol>                  
                </MDBRow>
                </MDBCol>
                <MDBCol size="4">
                  <img className="question-image" src="https://assets.entrepreneur.com/content/3x2/2000/20150609182102-raising-the-bar.jpeg?width=700&crop=2:1" />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              Reviews
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default StoryPage;
