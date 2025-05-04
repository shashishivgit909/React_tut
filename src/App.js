// import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Routefolder/Home";
// import About from "./Routefolder/About";
// import Navbar from "./Routefolder/navbar";
// import Page404 from "./Routefolder/Page404";
// import User from "./Routefolder/User";
// import Contact from "./Routefolder/Contact";
// import Filter from "./Routefolder/Filter";
// import Channel from "./Routefolder/Channel";
// import Others from "./Routefolder/Others";
// import Compnay from "./Routefolder/Company";
// import Login from "./Routefolder/Login";
// import Protected from "./Routefolder/Protected";

// function App() {
//     return (
//         <BrowserRouter>

//             <Navbar />
//             <Routes>

//                 <Route path="/" element={<Protected Comp={Home} />} />
//                 <Route path="/About" element={<About />} />
//                 {/* by below path in route , <User/> will be called but whatever is there in url after : will be parameter which stored in "name" */}
//                 <Route path="/User/:name" element={<User />} />
//                 <Route path="/filter" element={<Filter />} />
//                 <Route path="/login" element={<Login />} />



//                 {/* way to pass multiple paramter in url */}
//                 {/* <Route path="/user/:id/:name" element={<UserDetails />} /> */}

//                 {/* NESTED ROUTING ON CONTACT  BELOW */}

//                 <Route path="/Contact/" element={<Contact />} >
//                     <Route path="/Contact/Company" element={<Compnay />} />
//                     <Route path="/Contact/Channel" element={<Channel />} />
//                     <Route path="/Contact/Others" element={<Others />} />
//                 </Route>
//                 <Route path="/*" element={<Page404 />} />


//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react'
// function App() {
//   const [count,setCount]=useState(0);
//   console.log("count",count);

//   function updateCounter()
//   {
//     for(let i=0;i<5;i++)
//     {
//       // setCount(count+1);
//       setCount(temp=>temp+1);
//     }
//   }
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button  onClick={updateCounter}>Click Me to Update counter</button>
//     </div>
//   );
// }
// export default App;


/*
import React,{useState} from 'react'


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

    // <Student name={ "shahsi" } email={"shashi@gmail.com"} others={{address:"mumbai", cont:"7369013358"}}  />   
    <Student name={"shahsi"} email={"shashi@gmail.com"} others={{address:"mumbai", cont:"7369013358"}} salary={500}/> 

//PROPS: 
      // note for passing any value either an object or String or number etc , we need to pass that value in {}  for a particular key
       // props will be object consting all those key value passed  as above in <student />
       // we can use pass string value for key in props without {} but for others we need to use {} so better to use above concept
         
    <button onClick={() => { setName("Shashi") }}>update name</button>
    //<button onClick={()=>{Update}}>update name</button>  , // this is another way to define js code to run on cllck
  </div>
);
} 
export default App;

*/

/*
import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState(""); // State to hold the selected value
   
  const a=[1,2,3,4,5];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  const handleSelectChange = (e) => {
    setData(e.target.value); // Update the state with the selected value
  }

  return (
    //heading: simple topic to handle form: Explanation: 
    // NOte when we select any option then value corresponding to that option will be stored in state  function  called on  Onchnagevenet handler.
    <div>
      <form onSubmit={handleSubmit}>
        <select value={data} onChange={handleSelectChange}>  //  value is an attribute who shows
          <option value="hari">name</option>
          <option value="male">sex</option>
          <option value="25">age</option>
        </select> <br/><br/>
        <button type='submit'>submit</button>
        <input type="text " value={"shashi"}/>
      </form>  

    </div>
    */
// <>
//  <div>
//    //  In this code we areusing map for genrating options :: , Note when ever we use map or filter  we need to return that JSX we hae created  to render otherwise those cretaed JSX will not render */}
//   <form onSubmit={handleSubmit}>
//     <select onChange={handleSelectChange}>
//       {
//         a.map((t)=>{
//          return <option value={t} key={t} >{t}</option>
//         })
//       }

//     </select> <br/><br/>
//     <button type='submit'>submit</button>
//   </form>
// </div>

// </>
//   )
// }



// import React, { useState } from 'react'

/*
Problem of this code: updatedvalue will be printed on console since on click function " apple" is called . but jsx will not rerender so updated value wonot see on webpage.
In React, a component will re-render when its state or props change. In the provided code, the variable x is declared using the let keyword and is not defined as a state variable using React's useState hook. Therefore, changes to x will not trigger a re-render by default.

If you want the component to re-render when x changes, you should use the useState hook to declare x as a state variable.Just below this code we used to achieve this condition  
*/

// use of variable
// export default function App() {
// let x=5;
// function apple()
// {
//   x=x+=1;
//   console.log(x); 
//   //  if we have  to give a functioncall like 
// }
// return (
//   <div>
//    <h1>{x}</h1>

//    <button onClick={apple}> Clickme</button>
//   </div>
// )
// return (
//   <>
//   <label>
//     Pick a fruit:
//     <select name="selectedFruit">
//       <option value="apple">Apple</option>
//       <option value="banana">Banana</option>
//       <option value="orange">Orange</option>
//     </select>
//   </label>

//   </>
// );


//   return(

//   )
// }


//In the provided code snippet, the name attribute is used in the <select> element. The purpose of the name attribute is to associate a name with the dropdown list, which can be useful when submitting a form. When the user selects a fruit from the dropdown and submits the form, the selected fruit's value will be sent as part of the form data with the name "selectedFruit."

/* 
//use of state:   this way is recommeded
export default function App() {
  const [ins,setIns] = useState(5)
  
  function apple()
  {
    
    setIns(ins+1)
    //  if we have  to give a functioncall like 
  }
  return (
    <div>
     <h1>{ins}</h1>
     <button onClick={apple}> Clickme</button>
    </div>
  )
}


*/


// import UseStateWithObject from "./UseStateWithObject"
// // import UseStateWithArrays from "./UseStateWithArrays"
// import FetchingUsingUseEffect from "./Hooks/FetchingUsingUseEffect"
// import ParentComponent from "./Hooks/usecallback_hook/ParentComponent"
// import UseMemoHook from "./Hooks/UsememoHook";
// import GParent from "./Parent_childRandering.js/GParent";
// import Temp from "./Hooks/Temp";
// export default function App() {


//   return (
//     <div>
//       <Temp />
//     </div>
//   )
// }



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchParamsComponent from './Hooks/UseSearchParams_hook';  // Assuming your component is named SearchParamsComponent
import Dropdown from "./Dropdown/Dropdown";
function App() {
  return (
      <Dropdown/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SearchParamsComponent />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
