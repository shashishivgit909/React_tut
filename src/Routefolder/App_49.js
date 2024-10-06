
// import React from "react";
// import "./App.css"; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Routefolder/Home";
// import About from "./Routefolder/About";
// import Navbar from "./Routefolder/navbar";
// import Page404 from "./Routefolder/Page404";
// import Contact from ".Routefolder/Contact";

// function App() {
//     return (
//         <BrowserRouter>
//         {/* note route path for home should match with route given in link for home or about */}
//         {/* we can use below links in a sepearte functional component and use it here any no of time : Eg: have made a compo as navbar by importing link and using it here below */}
//         {/* NOTE: VVVI: we cannot do react router realted   outside BrowserRouter  so if we can geenrate links in any componeent , but need to iport inside browser router as done in "Navbar"*/}
//         <Navbar />
//             <Routes>
//                 {/* here all routing should be wrappped inside Routes and all routes are wraped inside browswerRoutes */}
                
//                 <Route path="/" element={<Home />} /> {/* by this when enter "localhost:3000/home"  then home componenet will open a*/}
//                 <Route path="/About" element={<About />} />
//                 <Route path="/*" element={<Page404 />} /> {/* : path="/*"   this line means if above url not matches then open this URL  */}
//                 {/* <Route path="/*" element={<Navigate to ="/" />}></Route>{/* by this we can  give a direct route for url not matching with any above. this route to home page for "/*" */}

//                 <Route path="/Contact" element={<Contact />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;


//TOPIC: NESTED ROUTING 
//NOTE: ROUTING FOR NESTED IS DONE IN App.js but link is  made in in that page in which we are making nested Eg; we do nested routing on conatct page . so we will make field in that page .

// file:App.js

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routefolder/Home";
import About from "./Routefolder/About";
import Navbar from "./Routefolder/navbar";
import Page404 from "./Routefolder/Page404";
import User from "./Routefolder/User";
import Contact from "./Routefolder/Contact";
import Filter from "./Routefolder/Filter";
import Channel from "./Routefolder/Channel";
import Others from "./Routefolder/Others";
import Compnay from "./Routefolder/Company";

function App() {
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                {/* by below path in route , <User/> will be called but whatever is there in url after : will be parameter which stored in "name" */}
                <Route path="/User/:name" element={<User />} />
                <Route path="/filter" element={<Filter />} />



               
                {/* NESTED ROUTING ON CONTACT  BELOW */}

                <Route path="/Contact/" element={<Contact />} >
                    <Route path="/Contact/Company" element={<Compnay />} />
                    <Route path="/Contact/Channel" element={<Channel />} />
                    <Route path="/Contact/Others" element={<Others />} />
                </Route>
                <Route path="/*" element={<Page404 />} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
//file: 
import { Link ,Outlet} from "react-router-dom";
function Contact()
{
    return(
        <>
        <h2>this is Contact page </h2>
        <Link to={"./Company"}>Company</Link>
        <Link to={"./Channel"}>Channel</Link>
        <Link to={"./Others"}>others</Link>
       < Outlet />
        </>
    )
}
export default Contact;

// NOte:1. Link vs Navlink
/*
=>Its is not recommneded to use className for styling, it may give warning in console and sometime app may bheva e unusual  to link so we use Navlink.

 2. <a> vs link 
 => <a> , y use of this complete page refreshes which is not recomnended in react. so use link

*/