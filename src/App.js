import React, { Component } from 'react';
import First from './First'
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to React Application.</h1>
          <p>A simple react application react application</p>
          <First name="Santhosh" age="22"/>
      </div>
    );
  }
}

export default App;
