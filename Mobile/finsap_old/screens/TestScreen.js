import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';


class TestScreen extends Component {
  state = {
    position: this.props.position,
  };
  
  render() {
    return (
      <Text>TEST SCREEN</Text>
    );
  }
};

export default TestScreen;
