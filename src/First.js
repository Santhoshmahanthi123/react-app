import React, { Component } from 'react';
class First extends Component{
 
    render(){
        //child component to be rendered in to parent component App.js
       //console.log(this.props)
       //destructuring to grab all properties
       const {first} = this.props;
       const firstList = first.map(first =>{
           //key is used to identify which element is to render in to dom according to id
          return (
                <div className="First" key={first.id}>
                <div>Name : {first.name}</div>
                <div>Age : {first.age}</div>
                </div>
        )
       })
       return(
           <div className="first-list">
             {firstList}  
           </div>
       )
            
    }
}

export default First;