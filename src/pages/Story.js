import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
// import Carousel from "../shared/carousel";
import ImageCard from "../shared/image-card";
import Amenity from "../shared/amenity";

const Wrapper = styled.div`
  margin-top: 60px;

  .test {
    /* border: 1px solid black; */
  }
  
  .card-image{
    height: 150px !important;
  }

  .subtitle{
    font-weight: 400;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px
  }

  .address{
    font-size: 15px;
  }

  .address-container{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .menu{
    padding: 5px;
    font-size: 15px;
    width: 80px;
    font-weight: 400;
    border-radius: 2px;
    /* background-color: red; */
    text-align: center;
    color: white;
  }

  .menu:hover{
    cursor: pointer;
    /* border-bottom: 1px solid black; */
    font-weight: 600;
  }

  .amenity-container{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .map{
    padding: 5px;
    font-size: 15px;
    width: 80px;
    font-weight: 400;
    border-radius: 2px;
    /* background-color: red; */
    text-align: center;
    color: white;
  }

  .story{
    margin-top: 25px;
  }

  .jo-image{
    height: 100%;
    width: 100%;
    /* border: 2px solid red; */
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px lightgrey;
  }

  .name{
    font-size: 25px;
  }

  .main-name{
    font-weight: 500;
  }

  .text{
    font-size: 15px;
  }

  .name-container{
    padding-left: 15px;
    padding-top: 15px;
  }
`;

class StoryPage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
          <MDBCol className="test" sm="12" >
            {
              //<Carousel/>
            }
            <ImageCard 
              className="card-image"
              url="https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/classic-burgers-u.jpg?itok=NwtAcM-7"
              thumbs={59}
              name="Joe's Bar & Grill"
              height="200px"
            />
          </MDBCol>
          </MDBRow>
   
          <MDBRow>
          <MDBCol className="test " sm="12" >
            <h5 className="subtitle">
            Bar & Tapas
            </h5>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol className="test address-container" sm="6">
            <MDBRow className="">
            <MDBCol>
            <h5 className="top address">
              1234 This Address st.
            </h5>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol>
            <h5 className="middle address">
              Newark, CA 12345
            </h5>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol>
            <h5 className="bottom address">
              Phone: 1 (123) 123-4567
            </h5>
            </MDBCol>
            </MDBRow>
          </MDBCol>
            <MDBCol className="test" sm="6">
              <MDBRow>
                <MDBCol className="test amenity-container" sm="12">
                  <Amenity name="vegan"/>
                  <Amenity name="keto"/>
                  <Amenity name="hiring"/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBCol className="test" sm="6">
                <h5 className="menu red">
                  Menu
                </h5>
              </MDBCol>
              <MDBCol className="test" sm="6">
                <h5 className="menu red">
                  Map
                </h5>
              </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className='story'>
            <MDBCol sm="4">
              <img className="jo-image" src="https://m.media-amazon.com/images/S/aplus-media/vc/88a2891b-c398-4a59-a32b-d7621eccf0a4._CR0,0,300,300_PT0_SX300__.jpg" alt="jo"/>
            </MDBCol>
            <MDBCol sm="8">
              <MDBRow className="name-container">
                <h5 className="name">Meet, <span className="main-name">Jo Anne !</span></h5>
              </MDBRow>
              <MDBRow className="name-container">
                <h5 className="text">Originally from spain, she moved here 25 years ago and brought with her her love for tapas and spanish hospitality. Now she spreads that love as a bartender and chef in Newark. </h5>
              </MDBRow>
              <MDBRow className="name-container">
                <h5 className="text">On her days off she enjoys discovering new recipe combinations and experimenting with gustative sensations. She is also a milk tea connoisseur! </h5>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default StoryPage;
