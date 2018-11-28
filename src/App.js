import React, { Component } from 'react';
import First from './Firsts';
import AddFirst from './AddFirst';
class App extends Component {
  //map function takes an array in java script and maps it to new array
  state = {
    firsts : [
    {name : 'Santhosh', age : '20', id:1},
    {name : 'Pandu', age :'23', id :2},
    {name : 'Bharath', age :'24', id :3 }
  ]
  }

  addFirst = (first) =>{
    first.id = Math.random();
    //spread operator used to create the copy of the array
    let firsts  = [...this.state.firsts,first];
    //setting state to the copy created
    this.setState({
      firsts:firsts
    })
  }
  deleteFirst = (id) =>{
// console.log(id)
//filter creates the new array 
 let firsts = this.state.firsts.filter(first =>{
   return first.id !==id;
 });
 this.setState({
   firsts : firsts
 })
  }
  render() {
    return (
      <div className="App" >
          <h1>Welcome to React Application.</h1>
          <p>A simple react application react application</p>
          <First firsts={this.state.firsts} deleteFirst={this.deleteFirst}/>
          <AddFirst addFirst = {this.addFirst} />
      </div>
    );
  }
}

export default App;
