## Topics to Learn
 1. Core react(): UI or state manipulation ,JSX
 2. Componenet reusualbility
 3. reuse component using Props 
 4. how to propage chnage using hooks

 ## Additional Addon to react

 1. Router : (react donot have router)
 2. state management(Redux , Redux tookit etc)
 3. BAAS API (eg: firebase)


 ## NOte:Core react creates web APP which run s on single page (SPA), but when we need to create multiple pages we use router from react-router-dom  which gives us facility to make multiple page application using routers ,But actually working on single page .just routing in si gle html page by some actions 


 ## React----> 
1. uses router-dom    : for  multipage web app
2. uses React-Native for mobile App.

## npm vs npx vs yarn 
=> npx simplifies command. npm is the default package manager for Node. js, npx allows running packages without installation, and Yarn provides enhanced performance and additional features compared to npm. The choice between them depends on project requirements, performance needs, and personal preference.

# utility : 
1. create-react-app : it is a software which make a bundle of all files structure we need to  work with react.  THis is quite bulky .  it      gives  also those packages or files which  will not be used in our peoject and  makes bundle heavy. So now recomended to use vite or parcel.
2. vite or parcel   :also does same work as crrate-react-app but less heavy bundles for react.

# NOte: 
1. function or compoennt name should start withUppercase.
2. In the react app created by "vite" the  compoenet you are making are forced to have  file name with .jsx 
3. In the react app created by "create-react-app" , we use .js extension of file But   we can  also make .jsx extension of file if that file is returning jsx .


##  API checking in Normal React.
   ## For Error : 
In API calls, certain HTTP status codes are considered errors, typically in the 4xx and 5xx ranges:

A. Client Errors (4xx)
=>These errors indicate issues with the request made by the client (e.g., missing information, unauthorized access).
Common 4xx error codes:
1. 400 Bad Request: The server could not understand the request due to invalid syntax.
2. 401 Unauthorized: Authentication is needed, or it failed.
3. 403 Forbidden: The client does not have permission to access the resource.
4. 404 Not Found: The requested resource was not found on the server.
5. 429 Too Many Requests: The client has sent too many requests in a given time frame (rate-limiting).

B. Server Errors (5xx)

=>These errors indicate issues on the server side, often related to server malfunctions or overloads.
Common 5xx error codes:
1. 500 Internal Server Error: The server encountered a general error and could not fulfill the request.
2. 502 Bad Gateway: The server received an invalid response from an upstream server(2nd party server).
3. 503 Service Unavailable: The server is currently unable to handle the request, often due to maintenance or overload.
4. 504 Gateway Timeout: The server did not receive a timely response from an upstream server.

   ## For successfull  API hit: 

 => response.ok is a quick way to check if the status code is between 200 and 299.
If response.ok is true, we parse the JSON data.
If the status code is not in the 2xx range, we throw an error to handle it in the catch block.



## Interview : 


React Discussions: Comprehensive Notes
1. How React Works
React is a JavaScript library for building user interfaces. It uses a virtual DOM to optimize updates to the real DOM. 
Instead of directly manipulating the DOM, React creates a lightweight representation of it and uses this virtual DOM to 
determine the minimal changes required to update the UI efficiently.
React follows a component-based architecture. Components are independent, reusable pieces of the UI, which can manage their own state and respond to changes in props or user interactions.
2. Hooks for Optimization
React provides various hooks to optimize component performance, ensuring that unnecessary re-renders or computations are 
avoided. The most notable hooks for optimization are `useMemo`, `useCallback`, and `React.memo`.
3. What Happens During a Component Re-render?
When a React component re-renders, the following happens:- The function defining the component is called again.- All variables,
 functions, and JSX are re-evaluated.- React then compares the virtual DOM trees to decide what needs to be updated in the real DOM.
To optimize, React developers use hooks like `useMemo` and `useCallback` to avoid re-evaluating expensive computations or
 functions that don’t depend on changing state.

4. useMemo vs useCallback vs React.memo
Key Differences
`useMemo` and `useCallback` are React hooks for memoization, while `React.memo` is a higher-order component for optimizing child rendering.

5. Examples
Example: useMemo
import React, { useState, useMemo } from 'react';
function ExpensiveComponent() 
{    const [count, setCount] = useState(0);   
 const [multiplier, setMultiplier] = useState(2);    
 const expensiveCalculation = useMemo(() => {
           console.log("Calculating...");       
            return count * multiplier;    }, 
            [count, multiplier]);   
             return (        
               <div>   
                        <h1>Result: {expensiveCalculation}</h1>    
                                <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>   
                                         <button onClick={() => setMultiplier(multiplier + 1)}>Increase Multiplier: {multiplier}</button>     
                                            </div>   
                                             );
                                             }
Example: useCallback
import React, { useState, useCallback } from 'react';
function Parent() {    const [count, setCount] = useState(0);    
const handleClick = useCallback(() => {  
         console.log("Button clicked!");    }, []);    
         return (      
              <div>           
               <button onClick={() => setCount(count + 1)}>Increment: {count}</button>          
                 <Child onClick={handleClick} />       
                  </div>    );
                  }const Child = React.memo(({ onClick }) => {   
                      console.log("Child rendered!");    
                      return <button onClick={onClick}>Child Button</button>;});

Combined Example: useMemo and useCallback
import React, { useState, useMemo, useCallback } from 'react';
function App() {  
     const [searchTerm, setSearchTerm] = useState(''); 
   const [count, setCount] = useState(0);  
     const data = ['apple', 'banana', 'cherry', 'date'];    
     const filteredData = useMemo(() => {        console.log("Filtering data...");  
           return data.filter(item => item.includes(searchTerm));    }, [searchTerm]);  
             const handleSearchChange = useCallback((event) => { 
                      setSearchTerm(event.target.value);    }, []);   
                       return (     
                           <div>      
                                 <input   
                                       type="text"   
                                         value={searchTerm}        
                                                 onChange={handleSearchChange}             
                                                    placeholder="Search..."            />   
                                                             <button onClick={() => setCount(count + 1)}>Count: {count}</button>          
                                                               <ul>                {filteredData.map((item, index) => <li key={index}>{item}</li>)}        
                                                                   </ul>        </div>    );}



VVVI:

## state vs Variable 
=> state cannot preserve its  value between component reranders.Suppose you have initialized a variable and on some action you are storing its calculated value . But due to compoenent rerander due to chnage in some other state also. On rerander the  component loads  full code  from begining so if  varible get its initial value which was given in its initialization . But if its was stored in state then its value donot initialized to initial value . 

=>But when we refresh page manually then variable and state both gets initial valiue . But on rerander state preserve its value but varible not .


### What can use inside jsx(return () block:) or what not in react component :  
  ## CanDO : 
  1. A Single Parent Element (or Fragment)
     React requires a single root element. You can wrap multiple elements inside:
  2. You can return standard JSX elements  or multiple elemnts wrapped by single parent or fragments.
  3. You can return other React components:  Eg: return <MyComponent />;
  4. You can use JavaScript expressions inside {}: eg: return <h1>{2 + 2}</h1>; // Outputs: 4    OR   or conditional rendering:       Eg: return <h1>{isLoggedIn ? "Welcome!" : "Please log in"}</h1>;

  5.  You can return an array of elements:EG: 
     return [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
          ];
         However, each item must have a unique key.

 6. Returning null prevents rendering anything:Eg: return isVisible ? <p>Visible</p> : null; we can use in conditional readering .
7. If you don't want an extra <div>, use an empty fragment:


## What You Cannot Use Inside return
1. Multiple Parent Elements Without a Wrapper  Eg: return (
  <h1>Hello</h1>
  <p>World</p>
);

2. Returning a function directly inside return is invalid:  
eg: return function someFunction() { return <h1>Invalid</h1>; };
✅ Instead, call the function inside JSX:

return <h1>{someFunction()}</h1>;

3. Variables Without JSX Braces ({}) orjs  code 

4. You cannot return plain objects: 
=> EG: return { name: "John" }; // ❌ Error
✅ Fix: Convert to JSON string or JSX:

return <pre>{JSON.stringify({ name: "John" }, null, 2)}</pre>;

5. 
In a React component, the return statement defines what the component renders. However, there are rules about what can and cannot be returned. Here’s a breakdown:

✅ What You Can Use Inside return
1. A Single Parent Element (or Fragment)
React requires a single root element. You can wrap multiple elements inside:

jsx
Copy
Edit
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome to React!</p>
  </div>
);
OR use a Fragment (<>...</>) to avoid unnecessary <div> elements:

jsx
Copy
Edit
return (
  <>
    <h1>Hello</h1>
    <p>Welcome to React!</p>
  </>
);
2. JSX Elements
You can return standard JSX elements like:

jsx
Copy
Edit
return <h1>Hello World</h1>;
or multiple elements inside a parent wrapper.

3. Components
You can return other React components:

jsx
Copy
Edit
return <MyComponent />;
4. Expressions (Inside JSX)
You can use JavaScript expressions inside {}:

jsx
Copy
Edit
return <h1>{2 + 2}</h1>; // Outputs: 4
or conditional rendering:

jsx
Copy
Edit
return <h1>{isLoggedIn ? "Welcome!" : "Please log in"}</h1>;
5. Arrays of JSX Elements
You can return an array of elements:

jsx
Copy
Edit
return [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
];
However, each item must have a unique key.

6. null (For Conditional Rendering)
Returning null prevents rendering anything:

jsx
Copy
Edit
return isVisible ? <p>Visible</p> : null;
7. <> (Empty Fragments)
If you don't want an extra <div>, use an empty fragment:

jsx
Copy
Edit
return (
  <>
    <h1>Title</h1>
    <p>Some text</p>
  </>
);
❌ What You Cannot Use Inside return
1. Multiple Parent Elements Without a Wrapper
This is invalid:

jsx
Copy
Edit
return (
  <h1>Hello</h1>
  <p>World</p>
);
✅ Fix: Wrap in a <div> or <>...</>.

2. Functions
Returning a function directly inside return is invalid:

jsx
Copy
Edit
return function someFunction() { return <h1>Invalid</h1>; };
✅ Instead, call the function inside JSX:

jsx
Copy
Edit
return <h1>{someFunction()}</h1>;
3. Variables Without JSX Braces ({})
This is invalid:

jsx
Copy
Edit
const message = "Hello";
return message; // ❌
✅ Fix: Use JSX:

jsx
Copy
Edit
return <h1>{message}</h1>;
4. Objects
=>You cannot return plain objects:

return { name: "John" }; // ❌ Error
✅ Fix: Convert to JSON string or JSX:

return <pre>{JSON.stringify({ name: "John" }, null, 2)}</pre>;

5. undefined or NaN
Returning undefined or NaN causes rendering issues:

return undefined; // ❌
return NaN; // ❌

✅ Fix: Use conditional rendering:

return someValue ? <p>{someValue}</p> : null;

6. Promises or Asynchronous Code
=> Returning a Promise directly is invalid:

return fetchData(); // ❌

solution: ✅ Fix: Use useEffect and useState:

const [data, setData] = useState(null);
useEffect(() => {
  fetchData().then(setData);
}, []);
return data ? <p>{data}</p> : <p>Loading...</p>;