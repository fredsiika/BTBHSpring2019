import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import FilterIcon from './map/filter';
import ListMapSwitch from './map/listmapswitchbtn';


const Wrapper = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
`;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function mapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.LEFT_BOTTOM
    },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_CENTER,
      },
      mapTypeControl: false,
      fullscreenControl: false,
    };
  }

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
            bootstrapURLKeys={{ key: 'AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            options={mapOptions}
            >
          </GoogleMapReact>
          <FilterIcon/>
          <ListMapSwitch height={this.props.height}/>
        </Wrapper>
      
    );
  }
}

export default GoogleMap;