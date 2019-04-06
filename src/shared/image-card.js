import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import styled from 'styled-components';

const Wrapper = styled.div`

.main-image {
    height: 100px;
    width: 100%;
    object-fit: cover;
  }

  .main-image:hover {
    cursor: pointer;
  }

  .thumbs-container{
    position: absolute;
    right: 20px;
    top: 20px;
    /* background-color: red !important; */
    color: white;
    display: flex;
    padding: 5px;
    border-radius: 3px;
  }

  .thumbs-up {
    margin-left: 10px;
    color: white;
  }

  .thumbs-count {
    float: left !important;
    font-weight: 600;
  }

  .restaurant-title {
    position: absolute;
    bottom: -8px;
    left: 15px;
    padding-top: 10px;
    font-weight: 400;
    display: inline-block;
    color: white;
    font-weight: 600;
    font-size: 100%;
    background-color: #00000080;
    width: calc(100% - 30px);
    padding-left: 10px;
    padding-bottom: 5px;
    border-radius: 0 0 3px 3px;
  }
`;

class ImageCard extends Component{
    render() {
        return (
            <Wrapper>
            <img
                src="https://resizer.otstatic.com/v2/photos/huge/24165521.jpg"
                className="main-image rounded float-left"
                alt="aligment"
              />
              <div className="thumbs-container red">
                <span className="thumbs-count">831</span>
                <span className="thumbs-up">
                  <MDBIcon icon="thumbs-up" />
                </span>
              </div>
              <h3 className="restaurant-title">Joe's Bar & Grill</h3>
            </Wrapper>
        );
    }
}

export default ImageCard;