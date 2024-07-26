import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchingUsingUseEffect() {
  const [posts, setPost] = useState([]);
  const [id, setId] = useState(1);

  //we cannot use async in callback function of useeffect instaed we nned to define another sync function inside that call back and call it inside as below.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[id]); // Add 'id' as a dependency to rerun the effect when 'id' changes

  const changeId=()=>{
     setId((prev)=>prev+1);   // just increasing the id by 1 
  }

  return (
    <>
      {/* by this  chnages in id by input value triggers api call  */}
      {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> */}  

      <button onClick={changeId}>clickme</button>
      <h1>{posts.title}</h1>
    </>
  );
}
