import React from 'react';
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  }

  render() {
    return React.createElement(
      'div',
      { className: 'counter' },
      React.createElement('p', null, `Value: ${this.state.value}`),
      React.createElement(
        'button',
        { onClick: this.decrement, className: 'secondary' },
        'Decrement'
      ),
      React.createElement(
        'button',
        { onClick: this.increment, className: 'secondary' },
        'Increment'
      )
    );
  }
}

export default Counter;