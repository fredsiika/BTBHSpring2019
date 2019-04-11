import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMap from './map/map';

const Wrapper = styled.div``;

class MapPage extends Component {
  state = {};

  render() {
    return (
      <Wrapper {...this.props}>
        {
          <GoogleMap
            height="100vh - 40px"
            width="calc(100vw - 15px)"
            restaurants={this.props.restaurants}
          />
        }
      </Wrapper>
    );
  }
}

export default MapPage;
