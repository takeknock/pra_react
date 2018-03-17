import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

class ToolBar extends Component {
  render() {
    return (
      <Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
      />
    );
  }
}

export default ToolBar;
