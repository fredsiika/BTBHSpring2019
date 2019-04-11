import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdbreact';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  .review-title {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .review-category {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .icon {
    text-align: center;
  }

  .icon:hover {
    cursor: pointer;
  }

  .theme-red {
    color: red;
    transition: color 2s;
  }
`;

class LeaveReview extends Component {
  state = {
    food: false,
    atmos: false,
    service: false,
    comment: ''
  };

  handleFood = () => {
    this.setState({
      food: !this.state.food
    });
  };
  handleAtmos = () => {
    this.setState({
      atmos: !this.state.atmos
    });
  };
  handleService = () => {
    this.setState({
      service: !this.state.service
    });
  };

  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <h5 className="large review-title">Leave A Quick Review</h5>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              <MDBRow>
                <MDBCol>
                  <h5 className="small review-category">Food</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <div className="icon">
                    <MDBIcon
                      far={!this.state.food}
                      onClick={this.handleFood}
                      icon="thumbs-up fa-2x"
                      className="theme-red"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="4">
              <MDBRow>
                <MDBCol>
                  <h5 className="small review-category">Atmosphere</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <div className="icon">
                    <MDBIcon
                      far={!this.state.atmos}
                      onClick={this.handleAtmos}
                      icon="thumbs-up fa-2x"
                      className="theme-red"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="4">
              <MDBRow>
                <MDBCol>
                  <h5 className="small review-category">Service</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <div className="icon">
                    <MDBIcon
                      far={!this.state.service}
                      onClick={this.handleService}
                      icon="thumbs-up fa-2x"
                      className="theme-red"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="10" className="offset-1">
              <MDBInput type="textarea" label="Comments" rows="3" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="9" className="offset-1">
              <MDBBtn
                className="btn btn-block center"
                color="primary"
                onClick={this.props.handleDone}
              >
                DONE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default LeaveReview;
