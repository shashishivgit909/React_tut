// //topic1: normal use of useEFFect

/*
=>  useEffect is a React Hook used to perform side effects in function components.
 It runs after the render and is commonly used for tasks like data fetching, event listeners, subscriptions, and timers.
 */
//1. Data Fetching:
//2. Timers(setInterval):
code:

useEffect(() => {
  const interval = setInterval(() => { ... }, 1000);
return () => clearInterval(interval); // Cleanup
}, []); // Runs only once on mount

//3. Event Listeners:
code:
useEffect(() => {
  const handleScroll = () => {
    console.log('Window scrolled');
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup: remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Runs once when the component mounts








import React, { useEffect, useState } from "react"; // there are 2 hooks 
function App() {
  const [count, setCount] = useState(0); // initial value of count
  useEffect(() => // this will be called  when componenet is created , and also caleed for state/props  change
  {
    console.log("work1");
  })
  useEffect(() => // hook function , this will be called , when componenet is created , not caleed for state/props  change
  {
    console.log("work2");
  }, []);
  //note we can define multiple useeffect as per our use .
  return (
    <>
      <h1>rendered :{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      {/*when we wil clck button then state will change and render will be called but not useEffect , here  */}
    </>
  )
}
export default App;


//topic2: useEffect  for specific state and props
import React, { useEffect, useState } from "react"; // there are 2 hooks 
import Student from "./Student";
function App(props) {
  const [count, setCount] = useState(0); // initial value of count
  const [data, setData] = useState(0); // initial value of count
  useEffect(() => // hook function , this will be called  when componenet is created , also caleed for change in data(state) change.
  {
    console.log("work1");
  }, [data]);
  useEffect(() => // hook function , this will be called  when componenet is created , and also for state change of 'count'
  {
    console.log("work2");
  }, [count]);

  //NOTE:VVI: we can define multiple useeffect as per our use .
  return (
    <>
      <h1>rendered {count}</h1>
      <h1>rendered {data}</h1>
      <Student count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>clickcount</button>  {/*when we wil clck button then state will change and render will be called and  2nd useEffect which has depenedency for state count will also called , here  */}
      <button onClick={() => setData(data + 1)}>clickdata</button>
    </>
  )
}
export default App;

//topic: 3: The general syntax of useEffect looks like this:

useEffect(() => {
  // Side effect code
  // Fetch data or perform any asynchronous task
  // For demonstration, using a setTimeout to mimic an async operation
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 2000); // Simulating a delay
  });

  setData(result);
};

fetchData();

// Cleanup function: This will be called when the component is unmounted
return () => {
  // Perform cleanup here, such as clearing timeouts, removing event listeners, etc.
  // For demonstration, logging a message when unmounted
  console.log('Component unmounted: Performing cleanup...');
};
  }, [/* dependency array */]);



//eg: code:


/*Note:  VVI: About use Effct: 
On initial render useEffect run with initail values , After initial render when componenet render then useEffect  unmounted after running(returning) 
cleaning function  and   loads again with new value on rerender. So if we  are listeining any event in useEffect  then we remove that event listners 
in cleaning code section ,so that when code rerender then then that previuos event listening removed other same event listing multiple times .

The effect function contains the code to perform the side effect, which might include API calls, subscriptions, setting up event listeners, etc.

The dependency array (optional) allows you to specify variables that the effect depends on. If any of these variables change between renders,
 the effect will re-run. An empty dependency array [] means the effect runs only once after the initial render (similar to componentDidMount in class components).
  If the dependency array is omitted, the effect runs after every render.

The optional cleanup function allows you to perform any necessary cleanup when the component is unmounted or before the effect runs again.
*/


/*
VVI: In useEffect hook whatever function we pass are effects which are remembers by fubctional component to run after every DOM manipulation (render). 
 So that we can make count variable also in useEffect that how much time our component is randers. 
 but we can make effects to run on some chnages of states only using  dependency array ([]).  
*/