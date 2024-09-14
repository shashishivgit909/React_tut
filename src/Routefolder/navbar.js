import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="navbar">
                {/* below on click to user or Anil and others , url coreesonding to that will be generated  and page with that route (in App.js )  will be  shown on page  */}
                {/* we cannot use classname or styel with Link , so  use "Navlink" in place of "Link" */}

                <div> <Link className="list_style" to="/">Home</Link ></div>
                <div><Link className="list_style" to="/About">About</Link ></div>
                <div><Link className="list_style" to="/Contact">Contact</Link ></div>
                <div><Link className="list_style" to="/filter" state={{ name: "shashi", rollno: 64 }}>Filter</Link ></div>
                <div><Link className="list_style" to="/login">Login</Link ></div>


                {/* way to give URL with multiparameter: <Link to="/user/123/john">User Details</Link> */}

            </div>
        </>)
}
export default Navbar;