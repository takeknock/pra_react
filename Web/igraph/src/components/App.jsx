import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LineChart } from 'recharts';

import QuestionList from './QuestionList';
import Graph from './Graph';


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <h1>finsap</h1>
          <Route exact path="/" component={QuestionList} />
          <Route path="/text1" component={About} />
          <Route path="/graph" component={LineChart} />
        </div>
      </Router>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
