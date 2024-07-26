// TPOIC: JSX :  JSX is a javascript object we can use store it as variable and  can render it conditionallly.
/*
JSX in React is a syntax extension that allows you to write HTML-like code directly within JavaScript. 
It's a powerful feature that simplifies the creation of React elements by blending JavaScript and HTML, making the code more readable and efficient.

code: // JSX
const element = <h1>Hello, JSX!</h1>;
// Transformed JavaScript
const element = React.createElement('h1', null, 'Hello, JSX!');

The main use of JSX in React is to write UI components in a way that resembles writing HTML but is actually JavaScript under the hood. 
JSX gets converted into regular JavaScript function calls called React.createElement() during the build process. This transformation allows you to create and compose React elements more intuitively, making your codebase cleaner and more maintainable.

// import React from 'react'

// export default function Extras({Channel ,verified}) { // Props object is destructured which is sent from Parent  comp.
//     // let channel;
//     // if(verified===true)
//     // {
//     //     channel= <div className="bg">{Channel} is verified </div>  //here channel store JSX as varible.
//     // }else{
//     //     channel= <div className="bg">{Channel}</div>  //here channel store JSX as varible.
//     // }
   
//   return (
//     <>
//     {/* conditionalt rendering here "is verified"  is conditionally rendered becouse it is only different as per as condition*/}
//       <div className="bg">{Channel} {verified ? "is verified" :null}</div> 
//     </>
//   )
// }


//makin a play button as a component


//VVI concept :  for react 
/*

In React, when you use onClick={addNewUser(fakeUserData())}, you're actually calling the addNewUser function immediately when the component renders, rather than waiting for the click event. This is because addNewUser(fakeUserData()) is a function invocation, not a reference to a function.

To clarify:

onClick={()=>{addNewUser(fakeUserData())}} is the correct way to set up the click event. It creates an arrow function that will call addNewUser(fakeUserData()) only when the button is clicked.
onClick={addNewUser(fakeUserData())} directly calls addNewUser(fakeUserData()) as soon as the component renders, not waiting for a click event. This is why the function isn't triggered on each click—it's executed immediately and not bound to the click event.
If you want the function to be called on click without using an arrow function, you can do it like this:

 code:
<button onClick={() => addNewUser(fakeUserData())} className="btn add-btn">Add New Users</button>

This way, the function addNewUser(fakeUserData()) will be invoked only when the button is clicked.


//another EG:
<button onClick={addNewUser} className="btn add-btn">Add New Users</button>   // in simple  onclick event also as we are doing previusly on click we are not  giving invoked function but just giving reference to that function  : this functiongot  invoked when click event occur




*/