//file: App.js

import React from "react";
import './style.css'
import style from './custom.module.css'
function App()
{
    return(
        <div>
        <h1 className="primary">style in React type:1</h1> 
       <h1 style={{backgroundColor:'red', color:'green'}}>styel in react type:2</h1>  {/*  type: inline ,{{}} , 1st bracket for JSX and 2nd becouse it takes object  */}

       {/* below style we imported above  , and sucess is class name , we are using here for css */}
 <h1 className={style.success}>style inreact type : custom.module.css (we make another file with name "custom.module.css")</h1>
        </div>
    )
}
export default App;

//file:style.css
/*

.primary{
    background-color:black ;
    color: green;
    
}

//file: custom.module.css
.success{
    color: gold;
    background: #000;

}
*/