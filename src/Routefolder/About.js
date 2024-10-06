import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <h2>Go to  ABOUT page </h2>
            <div><NavLink className="list_style" to="/User/Anil">Anil</NavLink ></div>
            <div><NavLink className="list_style" to="/User/Peter">Peter</NavLink ></div>

        </>
    )
}
export default About;