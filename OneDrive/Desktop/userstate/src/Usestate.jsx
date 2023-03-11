import React from 'react'
import {useState} from 'react'

export default function Usestate(){

    const [data , setData] = useState('Amit')

     
     function changeName(){
        if(data == 'Amit'){
            setData('Rajan')

        }else {
          setData('Amit');
     }
       
      
     } 

  return (
    <>
      <p>{data}</p>
      
      
     <button onClick={changeName}>click Name </button>
</>
 )
}
