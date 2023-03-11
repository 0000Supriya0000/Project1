import React from 'react'
import {useState} from 'react';

export default function App() {
  const [count , setCount] = useState(0);
  
  function handleOnClick(){
     

   setCount(count+1)
       
    }
    function handleDecreament(){
      setCount(count-1)

    }

      

  return (
    <div>
      <p>{count}</p>  
      <button onClick={handleOnClick}>click here</button> 
      <button onClick={handleDecreament}>click me</button>

    </div>
  )
}





