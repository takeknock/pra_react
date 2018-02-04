import React, { Component } from 'react';
import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Tedd' });
  }

  handleMouseOut() {
    this.setState({ name: 'John' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onFocus={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
        onBlur={() => this.handleMouseOut()}
      >

        <Greeting name={this.state.name} />
      </div>);
  }
}

export default App;
