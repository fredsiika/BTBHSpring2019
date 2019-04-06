import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
// import FilterIcon from './map/filter';
// import ListMapSwitch from './map/listmapswitchbtn';


const Wrapper = styled.div`
    height: calc((${props => props.height}));
    width: ${props => props.width};
    transition: width 1s;
`;

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
      lat: 37.548616,
      lng: -122.059097
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
          {
            //Will likely not be using this method in mobile view
            //<FilterIcon isFullscreen={this.props.isFullscreen}/>
            //<ListMapSwitch height={this.props.height} handleToggle={this.props.handleToggle} isFullscreen={this.props.isFullscreen}/>
          }
        </Wrapper>
      
    );
  }
}

export default GoogleMap;