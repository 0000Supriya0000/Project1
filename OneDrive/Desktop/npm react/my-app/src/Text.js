
    import React, {useState} from 'react'

    export default function () {
      const [text, setText] = useState('')
      const[error, setError] = useState('')
    
    const handleChange = (e) => {
      if(e.target.value.length>100)
      {
        setText(e.target.value)
        setError("Charachter limit exceede")}

        else{
            setText(e.target.value)
            setError("")
        }
      }
return(
    <div class = "App">
        <div className ="input-container">
            <input className = "Input" type = "text" placeholder='Enter something...'
            onChange={handleChange}
            value={text}
            />


        </div>
    </div>
)
    }
