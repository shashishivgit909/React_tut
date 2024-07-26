import { Link, useNavigate } from "react-router-dom";
function Naviagte()
{
    const navigate=useNavigate(); //navigate power comes under navigate
    return(
        <>
 <Link to="/About" > got to About page</Link>
 <button on onClick={()=>navigate("/About")}>got to home page</button>
 <button on onClick={()=>navigate("/Filter")}>got to filter page</button>

        </>
    )
}
export default Naviagte;