import React from 'react';
import propTypes from 'prop-types';

const GeocodeResult = ({ place, lat, lng }) => (
  <ul className="geocode-result" >
    <li>住所：{place}</li>
    <li>緯度：{lat}</li>
    <li>軽度：{lng}</li>
  </ul>
);


GeocodeResult.propTypes = {
  place: propTypes.string,
  lat: propTypes.number,
  lng: propTypes.number,
};

GeocodeResult.defaultProps = {
  place: '東京タワー',
  lat: 0,
  lng: 0,
};

export default GeocodeResult;
