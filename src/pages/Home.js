import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from './home/map.js';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  `;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <GoogleMap height="500px" width="500px"></GoogleMap>
      </Wrapper>
    );
  }
}

export default HomePage;
