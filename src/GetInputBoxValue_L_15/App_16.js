
import React ,{useState} from "react"

function App()
{
  const[data , setdata]=useState(null)
  const[print , setPrint]=useState(false) 
  function getData(val)
  {
    setdata(val.target.value) //val.target.value means text writen in input box
  }
  return(
<>
{
  // this lines menas if print ==true then  print data value else do nothing
  print?<h1>{data}</h1>:null  
}

{/* onChange={getData}: The onChange attribute is an event handler in React that is triggered whenever
 the value of the input field changes. It's used to capture user input or changes to the input field. 
 ()i.e when we write anything in input box then getdata will be called and then stste will be changed in that function and then component renders*/}

 <input type="text" onChange={getData}/> {/* when the user types something in the input field, the onChange event will be triggered, and the getData function will be automatically called by React with the event object as an argument. */}


<button onClick={()=>{setPrint(true)}}> print</button>
</>

  )
}
export default App