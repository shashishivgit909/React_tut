import React ,{useState} from "react"

function App()
{
  const[status , setstatus]=useState(true);
 
  return(
 <>
 {
    status? <h1>helloworld</h1> :null
 }
 {/* <button onClick={()=>{setstatus(false)}}>hide</button> 
 <button onClick={()=>{setstatus(true)}}>show</button> */}

 <button onClick={()=>{setstatus(!status)}}>toggle</button> 
 {/* this implments toggle i.e when we click then status become opposite to previous i.t true ->false and false ->true  */}
 </>
)
}
export default App