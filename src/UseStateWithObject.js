// import React,{useState} from 'react'

// export default function UseStateWithObject() {
// const[name,setName]=useState({firstName:"",lastName:""})
//   return (
//     <div>
//       <form>
//         {/* by below:  state will be overridden by {firstName:e.target.value}  and other rpoerty lost */}
//         <input type="text" value={name.firstName}  onChange={(e)=>{setName({firstName:e.target.value})}}/>  
//         <br/>
//         {/* <input type="text" value={name.lastName}  onChange={(e)=>{setName({lastName:e.target.value})}}/> */}




//         {/* by below way:  new property will be overridden and rest will be same as previous  */}
//         <input type="text" value={name.firstName}  onChange={(e)=>{setName({...name, firstName:e.target.value})}}/>  

//        </form>

//       <h1>your firstName is {name.firstName}</h1>
//       <h1>your lastName is {name.lastName}</h1>

//     </div>
//   )
// }

//NOte : In React, when you're using stateful values that are objects or arrays, you should avoid mutating them directly, as React relies on immutable updates to detect changes and trigger re-renders efficiently.

//Code2: this mutating state directly which is not allowed in react if  state store object or array.

/*
import React, { useState } from 'react'

export default function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "shashi", lastName: "kalwar" })

  const changeName = () => {
    name.firstName="hari"
    console.log(name);
    setName(name);
  }

  return (
    <div>
      <button onClick={changeName}>{name}</button>
    </div>
  )
}

*/

//Correct code: Topic: VVVI : in JSX you have to you cannot use object or array in { } as variable directly . You have to JSON.stringify() it you you need to rander it. 
import React, { useState } from 'react'

export default function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "shashi", lastName: "kalwar" });

  const changeName = () => {
    // Create a new object with updated values instead of mutating the existing one
    setName({ ...name, firstName: "hari" });
  };

  return (
    <div>
      {/* Access the object property for display  which is not error */}
      {/* <button onClick={changeName}>{name}</button>     */}

      <button onClick={changeName}>{JSON.stringify(name)}</button>    
       {/*but above is also not recommende , becouse OP:as {"firstName":"shashi","lastName":"kalwar"}    which is not good UI but syntax correct */}


      <button onClick={changeName}>{name.firstName}</button>    

       
    </div>
  );
}
