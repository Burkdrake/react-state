import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(10);
     // handle increment
     const increment = () => {
        setCount(count + 1)
     }
        // handle decrement
        const decrement = () => {
            setCount(count - 1)
        }
        useEffect(() => {
            console.log("component did mount")
            console.log("Count :", count)
        },[count])
  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}   

export default Counter