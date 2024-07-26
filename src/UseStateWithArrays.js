import React, { useState } from 'react'

export default function UseStateWithArrays() {
    const [items, setItems] = useState([]); //initiliaze empty array to state variable.
    const addItems = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
    }
  // when dealing with objects 
    return (
        <div>
            <button onClick={addItems}>add a item</button>
            <ul>
                {
                    items.map((item) => {
                        return (<li key={item.id}>{item.value}</li>)
                    })
                }
            </ul>


        </div>
    )
}
