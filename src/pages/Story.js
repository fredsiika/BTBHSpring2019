import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBModal } from "mdbreact";
import styled from "styled-components";
import Carousel from "../shared/carousel";
import ImageCard from "../shared/image-card";
import Amenity from "../shared/amenity";
import LeaveReview from '../shared/leave-review';

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
    padding: 5px;
    margin-left: 10px;
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

  .red-theme{
    color: white;
    margin-left: 5px;
  }

  .thumbs-container{
    margin-top: 15px;
  }

  .thumbs{
    padding: 5px;
    color: white;
    /* background-color: red; */
    width: 65px;
    border-radius: 3px;
    float: right;
  }
`;

class StoryPage extends Component {

  state = {
    LeaveReview: false
  }

  handleLeaveReview = () => {
    this.setState({
      leaveReview: true
    });
  }

  handleDoneButton = () => {
    this.setState({
      leaveReview: false
    });
  }


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
                <div className="story-menu-container">
                <h5 className="story-menu">
                  MENU
                </h5>
              </div>
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
              <div onClick={this.handleLeaveReview} className="thumbs-container">
                <h5 className="thumbs red">59<MDBIcon icon="thumbs-up" className="red-theme"/></h5>
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
                  <img className="question-image" src="http://laurencariscooks.com/1_lcc/wp-content/uploads/2016/03/Lightened-Up-Patatas-Bravas-3-640x960.jpg" />
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
          <MDBModal isOpen={this.state.leaveReview} handleDone={this.handleDoneButton}>
            <LeaveReview />
          </MDBModal>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default StoryPage;
 