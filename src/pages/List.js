import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import ImageCard from '../shared/image-card';

import styled from "styled-components";

const Wrapper = styled.div`
  .test {
    /* border: 1px solid black; */
  }

  .card-container {
    padding-top: 15px;
    padding-bottom: 10px;
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

  .restaurant-title:hover {
    cursor: pointer;
  }

  .thumbs-container{
    position: absolute;
    right: 20px;
    top: 5px;
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

  .main-image {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }

  .main-image:hover {
    cursor: pointer;
  }

  .category {
    color: white;
    background-color: #f44336;

    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;

    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;

    margin: 2px;
  }
  
  .category-container{
      padding-top: 15px;
  }

  .amenity-container {
    /* padding-left: 2px; */
    margin-bottom: -5px;
    margin-top: 15px;
  }

  .amenity {
    height: 30px !important;
    width: 30px !important;
    margin-right: 5px;
    padding: 4px;
    border-radius: 50%;

    color: white;

    font-weight: bold;
    text-align: center;
    display: inline-block;
  }

  .icon {
    position: relative;
    top: -3px;
    left: -1px;
  }

  .miles {
    float: right;
    display: block;
    padding-top: 5px;
  }

  .rule {
    margin: 0;
  }

  .pushdown{
      padding-top: 50px;
  }
`;

class ListView extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer fluid>
          <MDBRow className="card-container">
            <MDBCol className="test" sm="3">
              <ImageCard />
            </MDBCol>
            <MDBCol className="test" sm="9">
              <MDBRow>
                <MDBCol className="test category-container" size="12">
                  <span className="category">American</span>
                  <span className="category">Burger</span>
                  <span className="category">Beer</span>
                  <span className="category">Grill</span>
                </MDBCol>
              </MDBRow>
              <MDBRow className="amenity-container">
                <MDBCol className="test" size="12">
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs">
                      +
                    </MDBIcon>
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="wifi" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity brown">
                    <MDBIcon icon="bacon" className="icon fa-sm" />
                  </h5>
                  <span className="miles">0.5 Miles</span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="rule" />
          <MDBRow className="card-container">
            <MDBCol className="test" sm="3">
              <MDBRow>
                <MDBCol className="test" size="12">
                  <img
                    src="https://assets3.thrillist.com/v1/image/2785413/size/gn-gift_guide_variable_c.jpg"
                    className="main-image rounded float-left"
                    alt="aligment"
                  />
                  <div className="thumbs-container red">
                    <span className="thumbs-count">739</span>
                    <span className="thumbs-up">
                      <MDBIcon icon="thumbs-up" />
                    </span>
                  </div>
                  <h3 className="restaurant-title">El Limoncito</h3>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="test" sm="9">
              <MDBRow>
                <MDBCol className="test" size="12" />
              </MDBRow>
              <MDBRow>
                <MDBCol className="test category-container" size="12">
                  <span className="category">Mexican</span>
                  <span className="category">Spicy</span>
                  <span className="category">Tacos</span>
                </MDBCol>
              </MDBRow>
              <MDBRow className="amenity-container">
                <MDBCol className="test" size="12">
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs">
                      +
                    </MDBIcon>
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="wifi" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="suitcase" className="icon fa-sm" />
                  </h5>
                  <h5 className="amenity brown">
                    <MDBIcon icon="bacon" className="icon fa-sm" />
                  </h5>
                  <span className="miles">0.8 Miles</span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="rule" />
          <MDBRow className="card-container">
            <MDBCol className="test" sm="3">
              <MDBRow>
                <MDBCol className="test" size="12">
                  <img
                    src="https://media.timeout.com/images/103820800/630/472/image.jpg"
                    className="main-image rounded float-left"
                    alt="aligment"
                  />
                  <div className="thumbs-container red">
                    <span className="thumbs-count">612</span>
                    <span className="thumbs-up">
                      <MDBIcon icon="thumbs-up" />
                    </span>
                  </div>
                  <h3 className="restaurant-title">Best Halal</h3>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="test" sm="9">
              <MDBRow>
                <MDBCol className="test category-container" size="12">
                  <span className="category">Arabic</span>
                  <span className="category">Halal</span>
                </MDBCol>
              </MDBRow>
              <MDBRow className="amenity-container">
                <MDBCol className="test" size="12">
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs">
                      +
                    </MDBIcon>
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="wifi" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="suitcase" className="icon fa-sm" />
                  </h5>
                  <h5 className="amenity brown">
                    <MDBIcon icon="bacon" className="icon fa-sm" />
                  </h5>
                  <span className="miles">1.3 Miles</span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="rule" />
          <MDBRow className="card-container">
            <MDBCol className="test" sm="3">
              <MDBRow>
                <MDBCol className="test" size="12">
                  <img
                    src="https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/roast-turkey-pho-ck.jpg?itok=Vf6k6W0d"
                    className="main-image rounded float-left"
                    alt="aligment"
                  />
                  <div className="thumbs-container red">
                    <span className="thumbs-count">417</span>
                    <span className="thumbs-up">
                      <MDBIcon icon="thumbs-up" />
                    </span>
                  </div>
                  <h3 className="restaurant-title">Pho 64</h3>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="test" sm="9">
              <MDBRow>
                <MDBCol className="test category-container" size="12">
                  <span className="category">Vietnamese</span>
                  <span className="category">Noodles</span>
                  <span className="category">Soup</span>
                </MDBCol>
              </MDBRow>
              <MDBRow className="amenity-container">
                <MDBCol className="test" size="12">
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs">
                      +
                    </MDBIcon>
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="wifi" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="suitcase" className="icon fa-sm" />
                  </h5>
                  <h5 className="amenity brown">
                    <MDBIcon icon="bacon" className="icon fa-sm" />
                  </h5>
                  <span className="miles">1.8 Miles</span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="rule" />
          <MDBRow className="card-container">
            <MDBCol className="test" sm="3">
              <MDBRow>
                <MDBCol className="test" size="12">
                  <img
                    src="https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg"
                    className="main-image rounded float-left"
                    alt="aligment"
                  />
                  <div className="thumbs-container red">
                    <span className="thumbs-count">368</span>
                    <span className="thumbs-up">
                      <MDBIcon icon="thumbs-up" />
                    </span>
                  </div>
                  <h3 className="restaurant-title">China Express</h3>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="test" sm="9">
              <MDBRow>
                <MDBCol className="test category-container" size="12">
                  <span className="category">Chinese</span>
                  <span className="category">Spicy</span>
                </MDBCol>
              </MDBRow>
              <MDBRow className="amenity-container">
                <MDBCol className="test" size="12">
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs" />
                  </h5>
                  <h5 className="amenity green">
                    <MDBIcon icon="leaf" className="icon fa-xs">
                      +
                    </MDBIcon>
                  </h5>
                  <h5 className="amenity blue">
                    <MDBIcon icon="suitcase" className="icon fa-sm" />
                  </h5>
                  <h5 className="amenity brown">
                    <MDBIcon icon="bacon" className="icon fa-sm" />
                  </h5>
                  <span className="miles">2.1 Miles</span>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="rule" />
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default ListView;