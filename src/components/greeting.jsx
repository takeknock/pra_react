import React from 'react';
import propTypes from 'prop-types';

function Greeting(props) {
  return (<div>Hi {props.name}</div>);
}

Greeting.propTypes = {
  name: propTypes.string.isRequired,
};

export default Greeting;
