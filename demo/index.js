import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditInline } from '../src/index';

class Test extends Component {
  constructor() {
    super();

    this.state = {
      value: 'test'
    };

    this.inputs = {
      test: {
        editInline: undefined,
        input: undefined
      }
    };
  }

  onEditEnter(input) {
    input.input.focus();
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  onBlur(input) {
    input.editInline.edit();
  }

  onFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <EditInline value={this.state.value} onEditEnter={() => this.onEditEnter(this.inputs.test)} ref={editInline => this.inputs.test.editInline = editInline}>
        <input type="text" value={this.state.value}
          ref={input => this.inputs.test.input = input}
          name="test"
          onChange={this.onChange.bind(this)} 
          onBlur={() => this.onBlur(this.inputs.test)} 
          onFocus={this.onFocus}/>
      </EditInline>
    );
  }
}

ReactDOM.render(
  <div>
    <Test />
    HELLO plop
  </div>
  , document.querySelector('.container'));
