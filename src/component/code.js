

//Note: . In a JavaScript module, there can only be one default export.
//App.js code:

//note: when state or props changes then rendering done only of statements inside return ()

import logo from './logo.svg';
import './App.css';

import Users from './Users.js';


function App() {
  return (
    <div className="App">  
        
      { /* change starts fromhere  */ }
      <h1>hello world</h1>
      
      <Users />   {/*here functional componenet 'Users' got used*/}
      <Users />   {/*here functional componenet 'Users' got reused*/}
      <Users />   {/*here functional componenet 'Users' got reused*/}
      <Users />   {/*here functional componenet 'Users' got reused*/}

     
    </div>
  );
}

// note: we cxan make functional componenet in same file then we donot need to import ot expor , just them  as: < functionalcomp_name />
   
// function Users(){
//   return(
//       <>        
//       <h1>user componenet</h1>
//        <h1>hello </h1>
//      </>
//   )
// }


// export default App;

// ######################################
//user.js code:

/*
Topic-1: functional component ( mainly used)

function Users(){
    return(
        <>        
        <h1>user componenet</h1>
         <h1>hello </h1>
       </>
    )


}
export default  Users;

// Note: In React functional components OR CLASS COMPONENET, the return value should always be wrapped in a single parent element.
//  This parent element could be an HTML tag like <div>, <section>, <main>, or a React Fragment (<>...</> or <React.Fragment>...</React.Fragment>).
//  EG: using  <>...</> 

// function MyComponent() {
//   return (
//     <>
//       <h1>Hello, World!</h1>
//       <p>This is a functional component.</p>
//     </>
//   );
// }

*/

/*topic-2: class componenet (rarely used)*/

import React,{Component} from "react"
class Users extends Component
{   
    render()
    {
        return(
        <>
            <h1>hello</h1>  {/*this is the use of JSX , here we are writing HTML tag */}
            <div>{}</div> {/* we can show some calculation using { } braces , THis is done BY JSX*/}

        </>
         

        )
    }
}

export default  Users;

