import React from 'react';
import propTypes from 'prop-types';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.position}
    center={props.position}
  >
    <Marker
      {...props.marker}
    />
  </GoogleMap>
));

const Map = ({ lat, lng }) => {
  const position = { lat, lng };
  return (
    <InnerMap
      containerElement={<div />}
      mapElement={<div className="map" />}
      position={position}
      marker={{ position }}
    />
  );
};

Map.propTypes = {
  lat: propTypes.number,
  lng: propTypes.number,
};

Map.defaultProps = {
  lat: -8.7792696,
  lng: 115.1668263,
};

export default Map;
