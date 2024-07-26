 //file:login.js which will be imported in App.js and then in index .js
 //Note: below , simply handle input validation for user , passowrd, email and login button 
import React, { useState } from "react";
function Login() {
    const [user, setUser] = useState(true);
    const [password, setPassword] = useState(true);
    const [userError, set] = useState("");
    const [s2, sets2] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //shows if user is invalid and password is invalid then show an alert 
    function loginHandler(e) {
        if (userError.length <= 3 || s2.length <= 3)
            alert("please enter valid input")
    }

    //shows if input is < =3 in user , setUser =false
    function userHandler(e) {
        let item = e.target.value;
        if (item.length <= 3) {
            setUser(false)
        }
        else {
            setUser(true)
        }
        setuserError(item)
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length <= 3) {
            setUser(false)
        }
        else {
            setUser(true)
        }
        sets2(item)
    }

    // Note: in the same as above we can make passowrd handler for password
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="enter user id" onChange={userHandler} /> {user ? null : <spam>user not valid</spam>}
                <br></br>
                <input type="text" placeholder="enter your passowrd" onChange={passwordHandler} /> {password ? null : <spam>passowrd not valid</spam>}
                <br/>

                 <input type="text" placeholder="email" required /> {/*'required' shows filed  cannot be left empty */}
                <br/> 



                <button type="submit"  onClick={loginHandler} > login </button>  
            </form>


        </>
    )
}

export default Login
