import React, { Component } from 'react';
import First from './First';
import AddFirst from './AddFirst';
class App extends Component {
  //map function takes an array in java script and maps it to new array
  state = {
    first : [
    {name : 'Santhosh', age : '20', id:1},
    {name : 'Pandu', age :'23', id :2},
    {name : 'Bharath', age :'24', id :3 }
  ]
  }

  addFirst = (firsts) =>{
    firsts.id = Math.random();
    //spread operator used to create the copy of the array
    let first  = [...this.state.first,firsts];
    //setting state to the copy created
    this.setState({
      first:first
    })
  }
  render() {
    return (
      <div className="App">
          <h1>Welcome to React Application.</h1>
          <p>A simple react application react application</p>
          <First first={this.state.first}/>
          <AddFirst addFirst = {this.addFirst} />
      </div>
    );
  }
}

export default App;
