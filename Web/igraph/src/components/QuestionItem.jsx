import React, { Component } from 'react';


class QuestionItem extends Component {
  render() {
    return(
      <div>{this.props.text}</div>
    );
  }
}

export default QuestionItem;
