import React, { Component } from 'react'
import { CommonContext } from './CommonContext'
export default function UpdateButton() {
 
  
    return (
      
      <div>
       < CommonContext.Consumer>
        {
            ({UpdateColor})=>(
              <div>
                 <button onClick={()=>UpdateColor("yellow")}>UPDATE COLOR1</button>
                 <button onClick={()=>UpdateColor("pink")}>UPDATE COLOR2</button>
              </div>
               
            )
        }
       </CommonContext.Consumer>
      </div>
    )
  }

