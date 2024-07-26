import {useParams} from "react-router-dom";

function User()
{
    const params=useParams();
    console.log(params.name);
    // const {name}=params;
    /* 
     In the provided code, the params object is returned by the useParams hook from the react-router-dom library.
      This object contains the route parameters extracted from the URL. 
     Route parameters are the dynamic segments of a URL that are defined with a colon (:) in your route path.
    
     */
    //acessing multiple(here 2) paramters from url: 
    // const { id, name } = params; //destruring of object

    console.log(params.name);
    return(
        <>
        <h1>this is hello from{params.name}'s page</h1>
        
        </>
    )
}
export default User;