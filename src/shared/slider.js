import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
    .range{
        padding-right: 25px;
        padding-left: 25px;
    }

    .center{
        text-align: center;
    }

    .bold{
        font-weight: 600;
    }
`;

class SliderPage extends Component {

    state = {
        value: '1'
    }

    setNewValue(value){
        this.setState({
            value: value
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

  render() {
    return (
      <Wrapper className="my-5">
        <MDBContainer>
            <MDBRow>
                <MDBCol className="" size='12'>
                    <input min={0} max={2} value={this.state.value} onChange={this.handleChange} type="range" className="custom-range range" id="customRange1" />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol onClick={() => {this.setNewValue('0')}} className={this.state.value === '0' ? "bold center" : "center"} size='4'>
                 $
                </MDBCol>
                <MDBCol onClick={() => {this.setNewValue('1')}} className={this.state.value === '1' ? "bold center" : "center"} size='4'>
                 $$
                </MDBCol>
                <MDBCol onClick={() => {this.setNewValue('2')}} className={this.state.value === '2' ? "bold center" : "center"} size='4'>
                 $$$
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
      </Wrapper>
    );
  }
}

export default SliderPage;
