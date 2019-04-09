import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import styled from 'styled-components';

const Wrapper = styled.div`

.main-image {
    height: ${props => props.height || "100px"};
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

    componentDidMount() {
      console.log("HEIGHT: ", this.props.height)
    }

    render() {
        return (
            <Wrapper {...this.props}>
            <img
                src={this.props.url}
                className="main-image rounded float-left"
                alt="aligment"
              />
              <div className="thumbs-container red">
                <span className="thumbs-count">{this.props.thumbs}</span>
                <span className="thumbs-up">
                  <MDBIcon icon="thumbs-up" />
                </span>
              </div>
              <h3 className="restaurant-title">{this.props.name}</h3>
            </Wrapper>
        );
    }
}

export default ImageCard;