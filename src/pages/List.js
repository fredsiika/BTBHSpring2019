import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import ImageCard from '../shared/image-card';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Amenity from '../shared/amenity';

const Wrapper = styled.div`
  .test {
    /* border: 1px solid black; */
  }

  .card-container {
    padding-top: 25px;
    padding-bottom: 20px;
    background-color: white;
    box-shadow: 0px 0px 20px 5px lightgrey;
    margin-top: 0;
    transition: margin-top 0.2s, padding-bottom 0.2s, box-shadow 0.2s;
    -webkit-transition: margin-top 0.2s, padding-bottom 0.2s, box-shadow 0.2s; /* Safari */
    z-index: 0;
  }

  .card-container:hover {
    box-shadow: 0px 0px 40px 5px #aaaaaa;
    /* padding-top: 30px; */
    padding-bottom: 25px;
    margin-top: -5px;
    z-index: 9999;
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

  .thumbs-container {
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
    z-index: 0;
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

  .category-container {
    padding-top: 15px;
  }

  .amenity-container {
    /* padding-left: 2px; */
    margin-bottom: -5px;
    margin-top: 15px;
  }

  .miles {
    float: right;
    display: block;
    padding-top: 5px;
  }

  .rule {
    margin: 0;
  }

  .pushdown {
    padding-top: 50px;
  }
`;

class ListView extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          {this.props.restaurants.map((restaurant, index) => {
            return (
              <div key={index}>
                <MDBRow className="card-container">
                  <MDBCol className="test" xs="6" sm="4">
                    <ImageCard
                      url={restaurant.imageUrl}
                      thumbs={
                        restaurant.thumbsUpId.food +
                        restaurant.thumbsUpId.service +
                        restaurant.thumbsUpId.atmosphere
                      }
                      name={restaurant.name}
                      id={restaurant.id}
                    />
                  </MDBCol>
                  <MDBCol className="test" xs="6" sm="8">
                    <MDBRow>
                      <MDBCol className="test category-container" size="12">
                        {restaurant.categories.map((amenity, index) => {
                          return (
                            <span key={index} className="category">
                              {amenity}
                            </span>
                          );
                        })}
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="test amenity-container">
                      <MDBCol size="12">
                        {restaurant.amenities.map((amenity, index) => {
                          return <Amenity key={index} name={amenity} />;
                        })}
                        <span className="miles">0.5 Miles</span>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <hr className="rule" />
              </div>
            );
          })}
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default withRouter(ListView);
