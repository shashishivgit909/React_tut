/*
import React, { useState } from 'react';
function UseMemoHook() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const counterOne = () => {
        setCount1(count1 + 1);
    };
    const counterTwo = () => {
        setCount2(count2 + 1);
    };

    const isEven = () => {
        let i=0;
        while(i<2000000000)i++;
        return count1 % 2 === 0;
    };
        
    return (
        <div>
            <div>
                <button onClick={counterOne}>increaseCount1 {count1}</button>
                <span>{isEven() ? "Even" : "Odd"}</span>  
            </div>

            <div>
                <button onClick={counterTwo}> increaseCount2 {count2}</button>
            </div>
           <div/>
           )
    }     
            
      export  default UseMemoHook;
*/

//Above function IsEven is dependent on counterOne , but with change in counter2 also isEven is called since isEven is heavy function . Now in such case i want tot make isEven need to be execute when only that state chnage then we can use useMemo.

import React, { useState, useMemo } from 'react';

function UseMemoHook() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const counterOne = () => {
        setCount1(count1 + 1);
    };

    const counterTwo = () => {
        setCount2(count2 + 1);
    };

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return count1 % 2 === 0;
    }, [count1]);

    //here useMemo gives memoized  value if dependency not changes so if count1  donot changes then callback inside useMemo dnot execute.

    return (
        <>
            <div>
                <button onClick={counterOne}>increaseCount1 {count1}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>

            <div>
                <button onClick={counterTwo}> increaseCount2 {count2}</button>
            </div>
        </>
    )
}
  export default UseMemoHook;              


  // NOte both useCallbackHook and useMemo hoks used for performance optimization by using memoization.