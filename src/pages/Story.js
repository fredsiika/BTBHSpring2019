import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import Carousel from "../shared/carousel";
// import ImageCard from "../shared/image-card";
import Amenity from "../shared/amenity";

const Wrapper = styled.div`
  margin-top: 60px;

  .story-header{
    height: 150px;
    margin-left: 25px;
  }

  .story-image{
    height: 150px;
    width: 150px;
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
`;

class StoryPage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow className="story-header">
            <MDBCol size="5">
              <img className="story-image" src="http://www.arabnews.com/sites/default/files/styles/n_670_395/public/2017/09/23/999216-213334383.jpg?itok=ofqNCPqO"  />
            </MDBCol>
            <MDBCol size="7">
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
              <MDBRow>
                <MDBCol size="4">
                  <img className="question-image" src="https://www.nbnco.com.au/content/dam/nbnco2/images/blog/new/sme-bar-owner-03-1043.jpg.transform/w1440/optimized/image.jpg" />
                </MDBCol>
                <MDBCol size="8">
                  <MDBRow>
                    <MDBCol>
                      Meet The Owner, Joe!
                    </MDBCol>                  
                  </MDBRow>
                  <MDBRow>
                  <MDBCol>
                    Answer
                  </MDBCol>                  
                </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol >
                  Question
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                Question
                </MDBCol>
                <MDBCol size="8">
                Image
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                Question
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
