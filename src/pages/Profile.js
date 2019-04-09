import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBInput
} from "mdbreact";
import styled from "styled-components";
import Review from '../shared/review'

const Wrapper = styled.div`
  margin-top: 63px;

  .profile-image {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 5px solid #ff5252;
    width: 150px;
    height: 150px;
    margin: auto;
    display: block;
    background-size: cover;
  }

  .user-name {
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: center;
    font-weight: 300;
    letter-spacing: 3px;
  }

  .verified {
    text-align: center;
  }

  .icon {
    margin-left: 10px;
    color: #0099cc;
  }

  .icon-red{
    margin-left: 10px;
    color: red;
  }

  .header {
    margin-top: -18px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #f3f3f3;
  }

  .review-banner {
    padding-left: -10px;
    padding-top: 5px;
    padding-bottom: 5px;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
  }

  .banner-container {
    background-color: #dfdfdf;
  }

  .test {
    margin: auto;
    padding: 15px;
  }
`;

class ProfilePage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer fluid>
          <MDBRow className="header">
            <MDBCol className="offset-lg-3 offset-xl-4" lg="6" xl="4">
              <MDBRow>
                <MDBCol sm="4">
                  <img
                    className="profile-image"
                    src="https://m.media-amazon.com/images/S/aplus-media/vc/88a2891b-c398-4a59-a32b-d7621eccf0a4._CR0,0,300,300_PT0_SX300__.jpg"
                    alt="image"
                  />
                </MDBCol>
                <MDBCol sm="8">
                  <h3 className="user-name">Jo Anne</h3>
                  <h5 className="verified">
                    Verified
                    <MDBIcon icon="check-circle icon" />
                  </h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="banner-container" sm="12">
              <h5 className="review-banner">Review History</h5>
            </MDBCol>
          </MDBRow>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default ProfilePage;
