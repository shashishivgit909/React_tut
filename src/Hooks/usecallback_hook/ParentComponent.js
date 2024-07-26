import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from "./Count"
export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
      setAge((prev) => prev + 1);
    }, [age])

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary])

  return (
    <div>
      <Title />
      <Count text={"Age"} count={age} />
      <Button handleClick={incrementAge}>IncrementAge </Button>
      <Count text={"salary"} count={salary} />
      <Button handleClick={incrementSalary}>IncrementSalary </Button>
    </div>
  )
}
/*    //##########################################################
Note: When you use the Button component in ParentComponent like this:
 <Button handleClick={incrementAge}>IncrementAge </Button>      then : The text "IncrementAge" between the opening and closing tags of the Button component is automatically treated as the "children" prop.
   so in Button component props  "children"  has  string value "incrementAge"
 


   //NOte: Q.1: When to use usecallBack hook and is it recommeded to use?
Ans: Yes, it is recommended to use the useCallback hook in certain situations to optimize the performance of your React applications.
 The useCallback hook is useful when you need to memoize a function to prevent it from being recreated on each render, especially when
  passing functions as props to child components or when using them as dependencies in other hooks like useEffect or useMemo.

  -> 

  Q2: what is usecallBack?
  =>It is a hook to which return a memoized version of callback function which changes only when ist dependencies chnages.So on parent componenet rerander, 
  it checks if dependencies of that callback function chnages then it allow to recreate function .Due to this if that function passes as props or dependencies then that child function wonot rerander since there is no chages in props by this function .
    
  ->In this case if child component have to protect rernader by using usecallback then child component must be applied by usememo hook as  as shown in Button.js or Count in this folder.
   */