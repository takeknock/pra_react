import React, { Component } from 'react';
import axios from 'axios';
import jsyaml from 'js-yaml';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';

// let fs = require('fs');


// const KEY = config.googlemaps.key;
// const KEY = jsyaml.safeLoad(fs.readFileSync('./config/maps.yml', 'utf-8'));
// console.log(KEY);
// const GEOCODE_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?key=${KEY}`;

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePlaceSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then((results) => {
        const result = results.data.results[0];
        const address = result.formatted_address;
        const status = results.data.status;
        const location = result.geometry.location;
        switch (status) {
          case 'OK':
            this.setState({
              address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
          case 'ZERO_RESULTS':
            this.setState({
              address: '結果が見つかりませんでした。',
              lat: 0,
              lng: 0,
            });
            break;
          default:
            this.setState({
              address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
        }
      })
      .catch(() => {
        this.setState({
          address: 'ネットワークがつながりませんでした。',
          lat: 0,
          lng: 0,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>緯度経度</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          place={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;
