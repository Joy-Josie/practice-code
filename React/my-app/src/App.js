import Clock from "./components/Clock";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      timeID: 0,
    };
  }

  startInterval() {
    this.timeID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  click() {
    clearInterval(this.timeID);
  }

  render() {
    this.startInterval();
    return (
      <div className="App">
        <Clock time={this.state.time}></Clock>
        <button onClick={this.click}>clear Interval</button>
      </div>
    );
  }
}

export default App;
