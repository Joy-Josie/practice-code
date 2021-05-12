import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  render () {
    return <h1>Hello, {this.props.time}</h1>;
  }
}

export default Clock;
