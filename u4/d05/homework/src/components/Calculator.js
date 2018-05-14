import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor(props) {
    super(props);
    this.state = {
      operand1: 0,
      operandNext: null,
      operation: null,
    };
  }
  render() {
    return (
      <div className="calculator">
        <Display />
        <NumberPad />
      </div>
    );
  }
}

export default Calculator;
