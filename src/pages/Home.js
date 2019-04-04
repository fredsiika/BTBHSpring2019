import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "./home/map";
// import ListView from "./home/list";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

class HomePage extends Component {
  state = {
    fullScreen: true
  }

  handleFullscreenToggle = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
    console.log("fullscreen: ", this.state.fullScreen);
  }

  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="6">
              <GoogleMap 
                height="100vh" width={this.state.fullScreen ? "100vw" : "50vw"} 
                handleToggle={this.handleFullscreenToggle}
                isFullscreen={this.state.fullScreen}
                />
              </MDBCol>
              {
            //<MDBCol sm="6">
             //<ListView />
             //</MDBCol>
            }
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default HomePage;
