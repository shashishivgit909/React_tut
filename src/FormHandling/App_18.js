

//VVI: read input tag and its attributes(value, name etc from w3school) .
/*
 <input type="text" name="fname" value="enter your name">  
 //name is used to specify name of input value in input box.  i.e while submitting form input box value can be accesses by  value of name attribute.
//value : The value attribute specifies the value of an <input> element.
 */

import React, { useState } from "react"
function App() {

  const handleSubmit = (event) => {
    event.preventDefault(); // PREVENT  PAGE REFRESHING ON SUBMIT form .
  }
  const [name, setname] = useState("") //state is name then , 2nd paramter name doesnot ned to be setname , we can take naynane , but for easyness we  take like that
  const [tnc, settnc] = useState("false")
  const [intrest, setintrest] = useState("");

  return (
    <>
      <h1>handle form in React</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="enter your name" onChange={(E) => setname(E.target.value)} /> <br /> <br />
        <select onChange={(e) => setintrest(e.target.value)}>
          <option>select option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e) => settnc(e.target.checked)} />  <spam> terms and conditiion</spam> <br></br> <br />
        <button type="submit"> Submit</button>
      </form>

    </>
  )
}
export default App;
/*
// Detail way of form handling
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
    //NOte when we select any option then value corresponding to that option will be stored in state  function  called on  Onchnagevenet handler.
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <select value={data} onChange={handleSelectChange}>  //  value is an attribute who shows
    //       <option value="hari">name</option>
    //       <option value="male">sex</option>
    //       <option value="25">age</option>
    //     </select> <br/><br/>
    //     <button type='submit'>submit</button>
    //   </form>      
    // </div>
    <>
     <div>
       {/*  In this code we areusing map for genrating options :: , Note when ever we use map or filter  we need to return that JSX we hae created  to render otherwise those cretaed JSX will not render }
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelectChange}>
          {
            a.map((t)=>{
             return <option value={t} key={t} >{t}</option>
            })
          }

        </select> <br/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
    </>
  )

  */


