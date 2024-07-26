//student.js file

// function Student(props) {
//     //here props came as JS object 
//     console.log(props) 
//     return (
//         <div style={{ backgroundColor: "skyblue" }}>
//             <h1>Hello{props.name }</h1>

//             {/* <h1>{ props.email} </h1>
//             <h1>{props.others.address}</h1> */}
            
//         </div>
//     )
//   }
  
//   export default Student;


  //
  //App.js file

// import logo from './logo.svg';
// import './App.css';

// import Users from './Users.js';

// function App() {
//   function Apple()
//   {
//     alert("function called")
//   }
//   return (
//     <div className="App">  
//     <h1>here i am button</h1>
//       {/* 3 ways to call on click for function ddefined in functional componenet  */}
//       <button onClick={Apple}> click me</button> 
//       <button onClick={()=>alert("hello")}> click me</button> 
//       <button onClick={()=>Apple()}> click me</button> 

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

//topic: propes in functional component (proper note : branch :propes func cmp , file :src/App.js  '"And go through ChatGPT also"')

//for this conecpt 3 files to see . App.js , Student.js, index.js( if needed for deatil)

// import React, { useState } from 'react'
// import logo from './logo.svg';

// import Student from './Student'
// function App() {
//   const [name, setName] = useState("Anil")
//   function Update() {
//     setName("Shashi")
//   }

// return (
//   <div >
//     <h1>Props in React :</h1>



//     <Student name={name} />
//     {/* <Student name={ "shahsi" } email={"shashi@gmail.com"} others={{address:"mumbai", cont:"7369013358"}}  />   */}
//     <button onClick={() => { setName("Shashi") }}>update name</button>
//     {/* <button onClick={()=>{Update}}>update name</button>  , // this is another way to define js code to run on cllck*/}
//   </div>
// );
// } 
// export default App;


// file :src/Student.js, here definug functinal component

// function Student(props) {
//   console.log(props)
//   return (
//       <div>
//           <h1>Hello {props.name}</h1>
//       </div>
//   )
// }

// export default Student
