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

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    return (
      // <div
      //   onMouseOver={() => this.handleMouseOver()}
      //   onFocus={() => this.handleMouseOver()}
      //   onMouseOut={() => this.handleMouseOut()}
      //   onBlur={() => this.handleMouseOut()}
      // >
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />

        <Greeting name={this.state.name} />
      </div>);
  }
}

export default App;
