import React ,{useState} from 'react'

function Parent({children}) {
    const[count,setcount]=useState(0);
    console.log("parent rerandering");
    console.log(children);
  return (
    <div>
     <button onClick={()=>setcount(count+1)}>clickme</button> 
     {children}
    </div>
  )
}

export default Parent
