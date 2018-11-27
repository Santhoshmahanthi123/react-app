import React, { Component } from 'react';
class First extends Component{
    render(){
        //child component to be rendered in to parent component App.js
       //console.log(this.props)
       //destructuring to grab all properties
       const {name, age} = this.props;
       return(
            <div className="First">
                <div>Name : {name}</div>
                <div>Age : {age}</div>
            </div>
        )
    }
}

export default First;