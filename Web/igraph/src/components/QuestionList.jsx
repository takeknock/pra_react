import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionItem from './QuestionItem';


const data = [
  { text: 'text1' },
  { text: 'text2' },
  { text: 'text3' },
  { text: 'text4' },
  { text: 'text5' },
  { text: 'text6' },
  { text: 'text7' },
  { text: 'text8' },
  { text: 'text9' },
  { text: 'text10' },
  { text: 'text11' },
  { text: 'text12' },
];

class QuestionList extends Component {
  render() {
    return (
      <ul className="list">
        {data.map(d =>
          <li className="listitem">
            <Link to={d.text}>
              <QuestionItem text={d.text} />
            </Link>
          </li>)
        }
      </ul>
    );
  }
}

export default QuestionList;
