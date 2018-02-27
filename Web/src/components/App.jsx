import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';

import getApiKey from '../../config/setting';

const API_KEY = getApiKey();
const GEOCODE_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}`;

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
        console.log(results);
        const result = results.data.results[0];
        const status = results.data.status;
        const location = result.geometry.location;
        console.log(status);
        switch (status) {
          case 'OK':
            this.setState({
              address: result.formatted_address,
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
              address: '結果の取得に失敗しました。',
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
