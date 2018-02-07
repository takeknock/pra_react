import React from 'react';
import propTypes from 'prop-types';

const GeocodeResult = ({ place, lag, lng }) => (
  <ul className="geocode-result" >
    <li>住所：{place}</li>
    <li>緯度：{lng}</li>
    <li>軽度：{lag}</li>
  </ul>
);


GeocodeResult.propTypes = {
  place: propTypes.string,
  lng: propTypes.number,
  lag: propTypes.number,
};

GeocodeResult.defaultProps = {
  place: '東京タワー',
  lng: 0,
  lag: 0,
};

export default GeocodeResult;
