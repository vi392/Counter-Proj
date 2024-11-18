
import React, { useState } from 'react'
import "./counter.css";

function Counter() {

  const [count, setcount] = useState(0)

  const hendleClick = ()=>{
       setcount(count+1)
  }

  return (
   <>

   <div className='Counter_container'>
    <p>You have clicked {count} times</p>
    <button onClick={hendleClick}>Click Me</button>
   </div>
   </>
  )
}

export default Counter
