import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -8.7792696, lng: 115.1668263 }}
  />
));

const Map = props => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
  />
);

export default Map;
