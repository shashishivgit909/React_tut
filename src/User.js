
// import React  from "react";
// class User extends React.Component
// {
//     constructor(){
//         super()
//         this.state={
//             email:'shashi@gmail.com'
//         }
//     }
//   render()
//   {
//      return(
//     <>
//     <h1>hello {this.state.email} </h1>
//     <button onClick={()=>{this.setState({
//         email:'adil'
//     })}}>change name</button>
//     </>
//   )
     
//   }
// }

// export default User


const User =(props)=>{
    console.log(props)
    return (
        <>
          hello
          <h1>{props.data.name1}</h1>
          <h1>{props.data.name2}</h1>
        </>
    )
}

export default User


