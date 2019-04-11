import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';

const Wrapper = styled.div`
  height: calc((${props => props.height}));
  width: ${props => props.width};

  .pin-container {
    height: 20px;
    width: 15px;
    font-size: 15px;
    margin-top: -20px;
  }

  .pin {
    color: red;
  }
`;
setPins = restaurants => {
  const pins = restaurants.map((key, restaurants) => {
    const pos = Geocode.fromAddress(
      restaurants.streetAddress +
        ', ' +
        restaurants.city +
        ', ' +
        restaurants.state +
        ' ' +
        restaurants.zip
    ).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      <div key={key} className="pin-container" lat={pos.lat} lng={pos.lng}>
        <MDBIcon icon="map-pin" className="pin" />
      </div>
    );
  });
  return pins;
};
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.548616,
      lng: -122.059097
    },
    zoom: 11
  };

  componentDidMount = () => {
    console.log(this.props.restaurants);
  };

  render() {
    return (
      <Wrapper {...this.props}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          {setPins(this.props.restaurants)}
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default GoogleMap;
