import React, { Component } from 'react';
import './App.css';
import Tickers from "./components/Tickers.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><span role="img">📈</span> INR Cryptocurrency Ticker </h2>
          <p>The Information Updates Every 10 Seconds.</p>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
