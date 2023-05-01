import React,{useState} from 'react'
import { QuizData } from './data'


export default function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score,setScore] = useState(0)
    const[clickedOption,setClickedOption] = useState(0)




    const changeQuestion = () =>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
        setCurrentQuestion(currentQuestion+1)
        }else{

        }
    }
    const updateScore = () =>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1)
        }
    }

  return (
    <div>
<p className="heading-txt">My Quiz</p>
<div className="container">
    <div className="question">
        <span id ="question-number">{currentQuestion+1}</span>
        <span id ="question-txt">{QuizData[currentQuestion].question}</span>


    </div>
    <div className="options-container">
        {QuizData[currentQuestion].options.map((option,i)=>{
            return(

               
                <button 
                
                
                //className="option-btn"
                className={'option-btn ${
                    clickedOption == i+1?"checked":null
                   }'}
                    key={i}
                    onClick={()=>setClickedOption(i+1)}
                    >

                    {option}

                </button>
            )
        })}
        





    </div>

    <input type="button" value="Next"id='next-button' onClick={changeQuestion} />



</div>


    </div>
  )
}