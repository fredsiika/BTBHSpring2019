import React, { Component } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const REACT_APP_MAP_KEY = 'AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY';

const Wrapper = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};

  background-color: white;
`;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <Wrapper {...this.props}>
        <GoogleMapReact
          abootstrapURLKeys={{
            key: REACT_APP_MAP_KEY,
            libraries: ['places', 'geometry'],
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.377844} text="My Marker" />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default GoogleMap;
