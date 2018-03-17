import React, { Component } from 'react';
import ToolBar from './ToolBar';

class InnerApp extends Component {
  render() {
    const { primaryColor } = this.context.uiTheme.palette;
    return (
      <ToolBar />
    );
  }
}

export default InnerApp;
