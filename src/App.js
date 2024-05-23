import './App.css';
import React, {useState} from 'react';

function App() {
  const questions = [
    {},
    {
      no: 1,
      question: "What is the Capital of India?",
      options: ["Delhi", "Chennai", "Mumbai", "Kolkata"],
      correctoption: "Delhi"
    },
    {
      no: 2,
      question: "What is the largest state in India?",
      options: ["Rajasthan", "Uttar Pradesh", "Karnataka", "Gujarat"],
      correctoption: "Rajasthan"
    },
    {
      no: 3,
      question: "What is the population of India (in billions)?",
      options: [1.44, 1.23, 1.55, 2.1],
      correctoption: 1.44
    },
    {
      no: 4,
      question: "Which State has the highest GDP?",
      options: ["Maharashtra", "Tamil Nadu", "Andhra Pradesh", "West Bengal"],
      correctoption: "Maharashtra"
    },
    {
      no: 5,
      question: "Which state is famous for its temples?",
      options: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Madhya Pradesh"],
      correctoption: "Tamil Nadu"
    },
  ];

  const [cnt, setCnt] = useState(1);
  const [mark, setMark] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (no) => {
    if (questions[cnt].options[no] === questions[cnt].correctoption) {
      setMark(prevMark => prevMark + 1);
    }

    if (cnt === questions.length - 1) {
      setShowResult(true);
    } else {
      setCnt(cnt + 1);
    }
  };

  return (
    <div className="App">
      {!showResult ? (
        <div id="dispquestion">
          {questions[cnt].question}
          <br />
          <button onClick={() => handleOption(0)}>{questions[cnt].options[0]}</button>
          <br />
          <button onClick={() => handleOption(1)}>{questions[cnt].options[1]}</button>
          <br />
          <button onClick={() => handleOption(2)}>{questions[cnt].options[2]}</button>
          <br />
          <button onClick={() => handleOption(3)}>{questions[cnt].options[3]}</button>
          <br />
          <div>Question Number: {cnt}</div>
        </div>
      ) : (
        <div>
          You Scored {mark} out of 5
        </div>
      )}
    </div>
  );
}

export default App;
