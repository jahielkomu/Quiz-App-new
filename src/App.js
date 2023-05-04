
//import './App.css';
import React, {useState} from "react";
import { MdRestore } from "react-icons/md";

function App() {
  const questions = [
    {
      questionId: 1,
      questionText:'What is the capital city of Kampala?',
      answerOptions:[
        {answerText: 'Mogadishu', isCorrect: false},
        {answerText:'Kampala', isCorrect: true},
        {answerText: 'Bahamas', isCorrect: false},
        {answerText: 'Buhweju', isCorrect: false}
      ],
    },

    {
      questionId: 2,
      questionText:'There is a movie about the men who built America',
      answerOptions:[
        {answerText: 'True', isCorrect: true},
        {answerText:'False', isCorrect: false},
      ],
    },

    {
      questionId: 3,
      questionText:'I bet 7 + 5 is equal to?',
      answerOptions:[
        {answerText: '12', isCorrect: true},
        {answerText:'21', isCorrect: true},
        {answerText: '16', isCorrect: false},
        {answerText: 'imposible', isCorrect: false}
      ],
    },

    {
      questionId: 4,
      questionText:'How many Harry Potter books are there?',
      answerOptions:[
        {answerText: '4', isCorrect: false},
        {answerText:'6', isCorrect: false},
        {answerText: '2', isCorrect: false},
        {answerText: '7', isCorrect: true}
      ],
    },

    {
      questionId: 5,
      questionText:'The monarchy of United Kingdom is ruled by Queen ELizabeth II',
      answerOptions:[
        {answerText: 'True', isCorrect: false},
        {answerText: 'False', isCorrect: true},
        
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [Score, setScore] = useState(0);
 


  const handleAnswerOptionClick = (isCorrect) =>{
    if (isCorrect){
      setScore(Score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">

      {showScore ? (
        <>
        <div className ='score-section'>
          You scored {Score} out of {questions.length}
          </div>
          <div>
            <div className="material-icons"> 
            <button onClick = {()=> window.location.reload(true)}> 
            <MdRestore/>
              </button>
              </div>
          </div>
        </>
        
      ): (
        <>
      <div className='question-section' id={'quiz'}>
        <div className='question-count'>
          <span>Question {currentQuestion+1}</span> /{questions.length}
        </div>
        <div className='question-text'> {
          questions[currentQuestion].questionText}
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption)=>(<button  
            key = {questions.questionId} 
            onClick={()=>handleAnswerOptionClick(answerOption.isCorrect)}>
            {answerOption.answerText}</button>
          ))}

        </div>

      </div>
      </>
      )}
    </div> 
      
  );
}

export default App;
