// import React from 'react'

// import Quiz from './data/Quiz'

// export default function Apps() {
//   return (
//     <>
//     <Quiz/>
    
//     </>
//   )
// }

import React from 'react';
import Question from './data/Question';

import { QuizData } from './data/data';

import Evaluation from './data/Evaluation';

export default function App() {
  const [qNo, setQNo] = React.useState(0);
  const [showEvaluation, setShowEvaluation] = React.useState(false);
  const answers = React.useRef([]);

  //console.log('ref', answers.current);
  const changeQuestion = () => {
    //console.log('Change the question!');
    setQNo((qNo + 1) % QuizData.length);
  };

  const evaluate = () => {
    setShowEvaluation(!showEvaluation);
    console.log('Evaluating answers');
    console.log('QUESTIONS', QuizData);
    console.log('ANSWERS', answers.current);
  };

  return (
    <div>
      <Question {...QuizData[qNo]} index={qNo} ans={answers.current} />
      <button
        className="btn btn-danger"
        onClick={changeQuestion}
        style={{ marginLeft: '20px' }}
      >
        Next
      </button>
      <button
        className="btn btn-success"
        
        style={{marginLeft: '20px'}}
        onClick={evaluate}
      >
        Submit
      </button>
      {showEvaluation && (
        <Evaluation ans={answers.current} questions={QuizData} />
      )}
    </div>
  );
}

