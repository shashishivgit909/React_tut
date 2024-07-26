import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  // we always call API inside useEffect()
  useEffect(()=>{
    fetch("http://localhost:4000/todo").then((result)=>{ //  url of data: "http://localhost:4000/todo"
      result.json().then((resp)=>{ //resp  si in JSON format
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])  // [], shows useEffect will call for just after componeent creation , not called for state and props.
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        { //using map qwe are traversing in Json data and accesssing data
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;