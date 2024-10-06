import React from 'react';
import { useSearchParams } from "react-router-dom";

function UseSearchParamsHook() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get("age");
    const city = searchParams.get("city");

    return (
        <div>
            <h1>Filter</h1>
            <h1>Age: {age}</h1>
            <h1>City: {city}</h1>

            <input type="text" onChange={(e)=>{setSearchParams({text:e.target.value , age:40})}} placeholder='set text value in query'/>
            <button onClick={()=>setSearchParams({age:100})}> click to set Age in query</button>
        </div>
    );
}

export default UseSearchParamsHook;
