import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "./map/map";

const Wrapper = styled.div`
`;

class MapPage extends Component {
  state = {
    fullScreen: true
  };

  handleFullscreenToggle = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
    console.log("fullscreen: ", this.state.fullScreen);
  };

  render() {
    return (
      <Wrapper>
              {
                <GoogleMap
                height="100vh - 40px"
                width={this.state.fullScreen ? "100vw" : "33vw"}
                handleToggle={this.handleFullscreenToggle}
                isFullscreen={this.state.fullScreen}
              />
            }
      </Wrapper>
    );
  }
}

export default MapPage;
