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
padding-bottom: 60px;

//   .icon {
//     margin-left: 10px;
//     color: #0099cc;
//   }

//   .icon-red{
//     margin-left: 10px;
//     color: red;
//   }

  .review-restaurant {
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #dfdfdf;
    font-weight: 400;
  }

  .thumbs-type {
    display: inline-block;
    text-align: center;
    width: 32%;
  }

  .review-text {
    text-align: justify;
    text-overflow: ellipsis;
  }

  p {
    height: 50px;
    overflow: hidden;
    whitespace: no-wrap;
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
    padding-bottom: 10px;
  }
`;

class Review extends Component {
    render() {
        return (
            <Wrapper>
                <MDBRow>
                    <MDBCol
                        className="review-container offset-md-2"
                        size="12"
                        sm="12"
                        md="8"
                    >
                        <h5 className="review-restaurant">Miss Sue's Chicken</h5>
                        <hr />
                        <MDBRow>
                            <MDBCol size="12" className="review-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis maximus ligula molestie consectetur. Praesent quis vulputate nunc. Aenean efficitur metus lectus, et maximus nisl vestibulum non. Curabitur sit amet dolor in sem pharetra congue. Vivamus mollis euismod lobortis. Integer sit amet odio eu mi tempor lobortis in sed lacus. Sed ultrices scelerisque urna vel consectetur. Phasellus nisl neque, condimentum vel posuere ut, vehicula a lorem.
                                    Pellentesque et risus felis. Nulla nisi lacus, facilisis vitae leo nec, facilisis rutrum enim. Suspendisse eu quam et mi malesuada venenatis. Nullam id ante nunc. Pellentesque finibus laoreet hendrerit. Fusce eu risus dictum, tempus enim ut, tempor est. Quisque vestibulum mauris sit amet magna laoreet euismod eget eget massa. Aenean justo sem, vestibulum sed dui ac, lobortis euismod augue. Donec vestibulum, purus ut commodo egestas, metus felis consectetur nisl, et porttitor nulla sem a risus. Nulla dignissim, urna nec pretium aliquam, turpis ante facilisis tortor, sed elementum lorem purus vel ante. Quisque aliquet consectetur dolor, eget congue erat consectetur id. Sed non facilisis est, sed elementum ipsum. Aliquam quis velit libero. Curabitur efficitur ex posuere arcu consectetur, ut dapibus ex ornare. Integer tellus lectus, tristique quis dignissim fringilla, commodo id sem. Morbi arcu lacus, tempor et augue non, sollicitudin varius orci.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <MDBRow className="thumbs-container">
                                    <h5 className="thumbs-type">Food<MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                                    <h5 className="thumbs-type">Staff<MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                                    <h5 className="thumbs-type">Atmosphere<MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                                </MDBRow>
                                {/* <div className="comment-container">
                                <MDBInput type="textarea" label="Example label" outline />
                                </div> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </Wrapper>
        )
    }
}

export default Review;