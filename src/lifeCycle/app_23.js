
// topic: Constructor lifecycle and render both, wirting code is same , just understand wchich will becalled first

import React, { useState }  from"react"

class App extends React.Component
{
  constructor()
  {
    super(); // super call constructor of super class Componenet .
               // It is mandatory to call super() before using this in the constructor of a subclass.
    this.state={ // 'this.state' is the current state of the component(it can be object or single value also , but here it is an object)
                  // 'this.setState' is a method to update the component's state.
      data:"Anil"
    }
  }
  render()
  {
     return(
    <>
    <h1> {this.state.data} </h1> 
    <button onClick={()=>{this.setState({data:"shashi"})}}>click </button>
    </>
  )
     
  }
}
export default App;


//###################################################

//topic:shouldComponentUpdate()

// import React from "react";
// class App extends React.Component
// {
//   constructor()
//   { super()
//     this.state={ 
//                   count:0
//     }
//   }
//   shouldComponentUpdate()
//   {
//     console.log(this.state.count);
//     if(this.state.count >=4 && this.state.count<16) 
//     {
//         return true; // this allows to call render() 
//         return false;// restrict to call render()
//     }
//   }
//   render()
//   {
//      return(
//     <>
//     <h1>reder got called</h1>
//     <h1> {this.state.count} </h1> 
//     <button onClick={()=>{this.setState({count:this.state.count+1})}}>click </button>
//     </>
//   )
     
//   }
// }
//export default App;

import React from "react";
import Student from "./Student";
class App extends React.Component
{
  constructor()
  { super()
    this.state={ 
        show:true
    }
  }
  
  render()
  {
     return(
    <>
     {
        this.state.show?<Student /> : null
     }
    <button onClick={()=>{this.setState({show:!this.state.show})}}>click </button> 
    </>
  )
     
  }
}
export default App;
// note : IN this  code, when state changed by clicking then <student/> component will be hidden and created .
//  when show is false then <student/>  got removed s0 lifcycle method componentWillUnmoun() defined in Student will be called
//INr :Q.the componentWillUnmoun() , must be in class componenet , its parent coponenet can be both clas as well as functional coponent.

//student file

import React from "react";

class Student extends React.Component {
    //here props came as JS object 

 componentWillUnmount()
  {
    alert("componentWillUnmount called")
  }
  render()
  {
    return (
        <>
        <h1>student component called</h1>
        </>
    )
  }
    
  }
  
  export default Student;