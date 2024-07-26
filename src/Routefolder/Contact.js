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