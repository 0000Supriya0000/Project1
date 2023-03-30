import React, {useState} from 'react'
import './Guess.css';


let randomNum=Math.floor(Math.random() * 100) +1;


export default function Guess() {
  const [userGuess,setUserGuess] = useState("")
  const [userCount,setUserCount] = useState(0)
  const [userAllGuessesVal, setUserAllGuessesVal] = useState([])
  const [randomnumber, setRandomNumber] = useState(randomNum)

  const[disabled,setDisabled] =  useState(false)
  const [msg,setMsg] = useState("")


  
  
  const handleValueChange = (e) =>{
  setUserGuess(e.target.value);
  }

  

  const submitHandler = () => {
    if(Number(randomnumber) === Number(userGuess)){
      setMsg("Congratulation!!!");

      setDisabled(true)

    }else if(userCount === 4){
      setMsg("Game Over !!!")
      setDisabled(true);
    }else{
      setMsg("Wrong Guess")
    }
    
    setUserCount(userCount + 1)

    setUserAllGuessesVal([...userAllGuessesVal,userGuess])
  }


  const restartAgain = () => {
    setDisabled(false)
    setMsg("")
    setUserAllGuessesVal([])
    setUserCount(0)
    setRandomNumber(Math.floor(Math.random() * 100) +1)
    setUserGuess("")
    
  }
  return (
       <div style = {{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100%", height:"100vh"}}>
<h1 className='h1'>Number guessing game</h1>
<br/>
<br/>


<input className='input1' disablesd={disabled} value={userGuess} type ="text" onChange={handleValueChange} />
<br />

<button className = "button" disabled ={disabled} onClick={submitHandler}>Submit</button>
{disabled &&
  <button className='b' onClick={restartAgain}>Start Again</button>
}

<div>

  <p className='p1'>msg : {msg}</p>
  <p className='p1'>total round play by user: {userCount}</p>
  <p className='p1'>Random number:{randomnumber}</p>

  <p  className='p1'>Your guesses:
    {userAllGuessesVal?.map((item,index) => {
      return(
        <span key={index}>
          {" "}
          {item}, { }
          </span>
      );
      

      
    })}
  </p>
</div>
       </div>
  )
}
