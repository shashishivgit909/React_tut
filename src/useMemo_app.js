import './App.css';
import React, { useState ,useMemo} from 'react'
function App() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  //below useMemo, make sure that function inside it will be called only if count is updated 
  //below , newApple donot represent function , it is variable, by using it we can execute usememo below in  return()
  const newApple=useMemo(
    function appleTime() {
      console.log("Hello")
      return 100 * count;
    }
  ,[count])
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
      {/* below we are using */}
      {newApple}   
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}

export default App;