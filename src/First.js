import React from 'react';
//UI based components uses functions which get data from the props
//UI based components dont require render method like class based
const First = ({first}) =>{
       //child component to be rendered in to parent component App.js
       //destructuring to grab all properties
       //in UI based components this.props not used since
       //it aquires all props as a function but not as a class
    //   This recieves props so directly put this in function as above const {first} = props;
    //    const firstList = first.map(first =>{
    //        if(first.age > 20){
    //        //key is used to identify which element is to render in to dom according to id
    //       return (
    //             <div className="First" key={first.id}>
    //             <div>Name : {first.name}</div>
    //             <div>Age : {first.age}</div>
    //             </div>
    //     )}
    //     else{
    //         return null;
    //     }
    //    })
    //directly returning template as a list into return function
       return(
           <div className="first-list">
             {   
                first.map(first =>{
               //using ternary operator
                  return first.age > 20 ? ( <div className="First" key={first.id}>
                   <div>Name : {first.name}</div>
                   <div>Age : {first.age}</div>
                   </div>
                   ) : null;
    })
    }  
           </div>
       )
            
    }
export default First;