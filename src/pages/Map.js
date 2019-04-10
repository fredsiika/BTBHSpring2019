import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "./map/map";

const Wrapper = styled.div`

`;

class MapPage extends Component {
  state = {
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
                width="calc(100vw - 15px)"
                handleToggle={this.handleFullscreenToggle}
                isFullscreen={this.state.fullScreen}
              />
            }
      </Wrapper>
    );
  }
}

export default MapPage;
