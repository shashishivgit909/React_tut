import { useLocation } from "react-router-dom";
function Filter()
{
    //getttig data from prev route , send by Link in navbar
    // here we are getting data  as state :
//state: {name: 'shashi', rollno: 64}

    const data=useLocation(); 
    console.log(data);
    return(
        <>
            <div>

<h2>Filter page</h2>
<h1>data  from prev router:{data.state.name}  {data.state.name}
</h1>
            </div>
        </>
    )
}
export default Filter;