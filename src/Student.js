import React from "react";

function Student(props)
{
      {/* this will be caled when props.count will be updated , since props is dynamic here    */}
//       useEffect(()=>{ 
// alert("props count"+props.count)
//        },[props.count])  

console.log(props);
    return(
        <>
     <h1>:{props.name}</h1>
     <h1> :{props.email}</h1>
        </>
    )   
    
}
  
  export default Student;