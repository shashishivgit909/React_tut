import React, { Component } from 'react'
import { CommonContext } from './CommonContext'
class Main extends Component {
 
  render() {
    return (
      
      <div>
       < CommonContext.Consumer>
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>this is the mian page</h1>
            )
        }
       </CommonContext.Consumer>
      </div>
    )
  }
}
export default Main;