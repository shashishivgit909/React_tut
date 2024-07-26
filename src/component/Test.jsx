import { Fragment, useState } from "react"


//use of JSX
const Test =()=>{
    const [name,setName]=useState("shashi");
    return (
        <>
             <h1>My name</h1>

             
                name==="adil"?<h4>shahsi</h4>:<h4>{name}</h4> 
             

             <h5>{name}</h5> 
               
        </>
    )
}
export default Test;