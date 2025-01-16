//App.js file

// import logo from './logo.svg';
// import './App.css';
//import Test from './component/Test'
// import Users from './Users.js';

// function App() {
//   function Apple(x)
//   {
//     alert("function called")
//   }
//   return (
//     <div className="App">  
//     <h1>here i am button</h1>
//       {/* 3 ways to call on click for function defined in functional componenet  */}
//       <button onClick={Apple}> click me</button> 
// <button onClick={()=>alert("hello")}> click me</button>   
//       <button onClick={()=>Apple()}> click me</button> //  if we have  to give a functioncall like Apple() i.e where we need to give params then 
// there we need to use as functioncall Apple(params) , inthat case we nned to attach this in arrow function as done in this line.  

//     </div>
//   );
// }

// export default App;

//user.js file
//topic: state 
//NOte: to use data ,use state instead of variable in component
/*
import React,{useState} from "react";
const App =()=>{

  const [value,setValue]=useState(0)
  console.log(value);
  const inc=()=>{
    console.log("inc",value)

      setValue(value+1);
  }

  console.log("---------------------->")
  const dec=()=>{
    console.log("dec",value)
    setValue(value-1);
}
  return (
    <>
       <h1>{value}</h1>
       {console.log("helo")}
       <button onClick={inc}>
        inc
       </button>
       <button onClick={dec}>
        dec
       </button>
       {console.log("helo")}
    </>
  )
}

export default App;
*/

// NOte:
// 1: the state is not accessible from outside the component.
// 2. State is private to component.
//3. we cannot use useState in class component


//################################

//Topic: propes in functional component (proper note : branch :propes func cmp , file :src/App.js )

//for this conecpt 3 files to see . App.js , Student.js, index.js( if needed for deatil)


import React, { Component, useState } from 'react'


import Student from './Student'
function App() {
  const [name, setName] = useState("Anil")
  function Update() {
    setName("Shashi")
  }

  return (
    <div >
      <h1>Props in React :</h1>
      <Student name={name} />

      <Student name={"shahsi"} email={"shashi@gmail.com"} others={{ address: "mumbai", cont: "7369013358" }} salary={500} />
      <Student name={"shahsi"} email={"shashi@gmail.com"} others={{ address: "mumbai", cont: "7369013358" }} salary={""} />
      {/* //here salary is not passed iniaily so in student componee i have dfined a default value for salary  so , to provide default value to a variable or state in child component destructure way of props is used in child component .Eg in <student />  below code */}

      {/*   //PROPS: 
      // note for passing any value either an object or String or number etc , we need to pass that value in {}  for a particular key
       // props will be object consting all those key value passed  as above in <student />
       // we can pass string value for key in props without {} but for others we need to use {} so better to use above concept*/}

      <button onClick={() => { setName("Shashi") }}>update name</button>
      {/* <button onClick={()=>{Update}}>update name</button>  , // this is another way to define js code to run on cllck*/}
    </div>
  );
}
export default App;

// file :src/Student.js, here definug functinal component

// function Student(props) {
//   console.log(props)
//   return (
//       <div>
//           <h1>Hello {props.name}</h1>
//           <h1>{ props.email} </h1>
//           <h1>{props.others.address}</h1>

//       </div>
//   )
// }

// export default Student

//passing state as props 

//2nd way : using destructure way: to receive props object sent by parent cmponent

//TOPIC:   NOte: VVVVI: 
/*
//In React, passing a parent component as an argument to a child component isn't a common pattern because components in React are designed to be self-contained and reusable.
 //Instead, you can pass props from a parent component to a child component to achieve the desired functionality.
//However, if you want a child component to access a method or state from its parent, you can pass down functions as props to achieve similar behavior. Here's an example:


// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

  const [parentState, setParentState] = useState('');
  const parentMethod = () => {
    // Do something in the parent component
  };

  return (
    <div>
      <ChildComponent parentMethod={parentMethod} parentState={parentState} />
    </div>
  );
};
export default ParentComponent;

//Explanation:In this example, parentMethod and parentState are passed down as props to ChildComponent.


// ChildComponent.js
import React from 'react';

const ChildComponent = ({ parentMethod, parentState }) => {
  // Now, you can use parentMethod and parentState in the child component

  const handleChildClick = () => {
    // Call the parent method from the child component
    parentMethod();
  };

  return (
    <div>
      <p>Parent State: {parentState}</p>
      <button onClick={handleChildClick}>Call Parent Method</button>
    </div>
  );
};

export default ChildComponent;
Remember, directly passing a parent component to a child component isn't a standard practice in React. Instead, passing down props or functions allows communication between parent and child components, ensuring a more predictable flow of data and actions within your application.
*/

import User from './User'

const App = () => {
  const [name, setName] = useState({
    name1: 'shashi',
    name2: 'adil'
  })
  return (
    <>
      {/* <button>click</button> */}
      <User data={name} />
    </>
  )
}

//Topic: Concept of Previous State: 
//when to use this : whenever we have to update the state based the previous  value of state then we use functional form of setState function .
/*
In your updateCounter function, you have a loop that calls setCount(count + 1) five times in quick succession. However, since the state updates are asynchronous,
 the value of count doesn't get updated immediately, and the loop essentially ends up using the same initial value of count for all five calls.
To fix this, you should use the functional form of setCount to ensure that you are updating the state based on the previous state:
*/

/*
import React, { useState } from 'react'
function App() {
  let initialCount=0;
  const [count,setCount]=useState(initialCount);
  console.log("count",count);

  function updateCounter()
  {
    for(let i=0;i<5;i++)
    {
      // setCount(count+1); //this is simple form of setCount
      setCount(prevCount=>prevCount+1);  //functional form of setCount or fuction which set state. Here we  can use anyname instaed of prevstate 
      //.VVI:  By this line we are taking initial state value as argument and doing opreation on that and  assigning final value to state count using setCount.

      //for multiple lines calculus in functional form of setCount
      setCount(prevCount => {
      // Perform multiple lines of calculations
      let newCount = prevCount;
      for (let i = 0; i < 5; i++) {
        newCount += 2; // Increment by 2 in each iteration
      }
      // Return the final value
      return newCount;
    });
    } 
  }
  return (
    <div className="App">
      <h1>{count}</h1> //OP: 5 on 1st click , 10 on 2nd time click and so on .
      <button  onClick={updateCounter}>Click Me to Update counter</button>     //on button click the  state becomes 5 on 1st click then on 2nd click the state will be 10 and so on . 
    </div>
  );
}
export default App;
*/




