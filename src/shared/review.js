import React, { Component } from "react";
import {
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
padding-bottom: 20px;

  .container{
      margin-bottom: 20px;
    }
  .icon-red{
    margin-left: 10px;
    color: red;
    margin-right: auto;
    text-align: center;
  }

  .review-restaurant {
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #fff5f5;
    font-weight: 400;
  }

  .thumbs-type {
    display: inline;
  }

  .review-text {
    text-align: justify;
  }

  .thumbs-seperator {
    margin-left: auto;
  }

  p {
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  h6 {
    text-align: center;
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

  hr {
    margin-top: 15px;
  }
`;

class Review extends Component {
    render() {
        return (
            <Wrapper>
                <MDBRow>
                    <MDBCol
                        className="container offset-md-2 offset-lg-3"
                        size="12"
                        sm="12"
                        md="8"
                        lg="6"
                    >
                        <h5 className="review-restaurant">Miss Sue's Chicken</h5>
                        <MDBRow>
                            <MDBCol size="12" className="review-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis maximus ligula molestie consectetur. Praesent quis vulputate nunc. Aenean efficitur metus lectus, et maximus nisl vestibulum non. Curabitur sit amet dolor in sem pharetra congue. Vivamus mollis euismod lobortis. Integer sit amet odio eu mi tempor lobortis in sed lacus. Sed ultrices scelerisque urna vel consectetur. Phasellus nisl neque, condimentum vel posuere ut, vehicula a lorem.
                                    Pellentesque et risus felis. Nulla nisi lacus, facilisis vitae leo nec, facilisis rutrum enim. Suspendisse eu quam et mi malesuada venenatis. Nullam id ante nunc. Pellentesque finibus laoreet hendrerit. Fusce eu risus dictum, tempus enim ut, tempor est. Quisque vestibulum mauris sit amet magna laoreet euismod eget eget massa. Aenean justo sem, vestibulum sed dui ac, lobortis euismod augue. Donec vestibulum, purus ut commodo egestas, metus felis consectetur nisl, et porttitor nulla sem a risus. Nulla dignissim, urna nec pretium aliquam, turpis ante facilisis tortor, sed elementum lorem purus vel ante. Quisque aliquet consectetur dolor, eget congue erat consectetur id. Sed non facilisis est, sed elementum ipsum. Aliquam quis velit libero. Curabitur efficitur ex posuere arcu consectetur, ut dapibus ex ornare. Integer tellus lectus, tristique quis dignissim fringilla, commodo id sem. Morbi arcu lacus, tempor et augue non, sollicitudin varius orci.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="thumbs-container">
                            <MDBCol className="thumbs-type">
                                <MDBRow>
                                    <MDBCol className="thumbs-seperator" size="12" sm="6" xl="4"><h6>Food</h6></MDBCol>
                                    <MDBCol className="icon-red" size="10" sm="1">
                                        <MDBIcon far icon="thumbs-up" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol className="thumbs-type">
                                <MDBRow>
                                    <MDBCol className="thumbs-seperator" size="12" sm="6" xl="4"><h6>Atmosphere</h6></MDBCol>
                                    <MDBCol className="icon-red" size="10" sm="1">
                                        <MDBIcon far icon="thumbs-up" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol className="thumbs-type">
                                <MDBRow>
                                    <MDBCol className="thumbs-seperator" size="12" sm="6" xl="4"><h6>Staff</h6></MDBCol>
                                    <MDBCol className="icon-red" size="10" sm="1">
                                        <MDBIcon far icon="thumbs-up" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        {/* <div className="comment-container">
                                <MDBInput type="textarea" label="Example label" outline />
                                </div> */}
                    </MDBCol>
                </MDBRow>
            </Wrapper>
        )
    }
}

export default Review;