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

const Wrapper = styled.div`
  .icon {
    margin-left: 10px;
    color: #0099cc;
  }

  .icon-red{
    margin-left: 10px;
    color: red;
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

class Review extends Component {
    render() {
        return (
            <Wrapper>
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
                                </h5>
                                <h5 className="thumbs-type">
                                    Staff
                                </h5>
                                <h5 className="thumbs-type">
                                    Category
                                </h5>
                            </div>
                            <div className="thumbs-container">
                                <h5><MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                                <h5><MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                                <h5><MDBIcon className="icon-red" far icon="thumbs-up" /></h5>
                            </div>
                            {/* <div className="comment-container">
                                <MDBInput type="textarea" label="Example label" outline />
                            </div> */}
                            <div className="comment">
                                <p>
                                    
                                </p>
                            </div>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </Wrapper>
        )
    }
}

export default Review;