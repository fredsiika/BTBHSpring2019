import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 60px;

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

  .review-restaurant {
    padding-top: 15px;
    text-align: center;
    font-size: 16px;
  }

  .review-container {
  }

  .thumb-type {
    text-align: right;
    font-size: 12px;
    background-color: red;
    display: inline;
  }

  .thumbs-container {
    display: inline;
    margin: 15px;
  }

  .comment-containter {
    display: inline;
  }

  .card {
    background-color: white;
    border: 2px solid #f3f3f3;
    align-self: auto;
    margin: 15px auto;
  }

  .input {
    height: 100%;
    width: 100%;
  }

  .input:active {
    outline-width: 0;
  }

  .input:focus {
    outline-width: 0;
  }

  .test {
    margin: auto;
    padding: 15px;
  }

  hr {
    margin: 0;
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
                    src="https://pbs.twimg.com/media/DlYQbmHW4AA1RZH.jpg:large"
                    alt="text"
                  />
                </MDBCol>
                <MDBCol sm="8">
                  <h3 className="user-name">Joe Schmoe</h3>
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
          <MDBRow>
            <MDBCol
              className="review-container offset-md-3"
              size="12"
              sm="12"
              md="6"
            >
                <h5 className="review-restaurant">Miss Sue's Chicken</h5>
                <hr />
                <MDBRow className="test">
                  <div className="thumbs-container">
                    <h5 className="thumbs-type">
                      Food
                      <MDBIcon className="icon-red" far icon="thumbs-up" />
                    </h5>
                    <h5 className="thumbs-type">
                      Staff
                      <MDBIcon className="icon-red" far icon="thumbs-up" />
                    </h5>
                    <h5 className="thumbs-type">
                      Category
                      <MDBIcon className="icon-red" far icon="thumbs-up" />
                    </h5>
                  </div>
                  <div className="comment-container">
                    <MDBInput type="textarea" label="Example label" outline />
                  </div>
                </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default ProfilePage;
