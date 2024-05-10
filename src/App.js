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
      options: ["Rajasthan", "Uttarpradesh", "Karnataka", "Guajarat"],
      correctoption: "Rajasthan"
    },
    {
      no: 3,
      question: "What is the population of India (in billions)",
      options: [1.44, 1.23, 1.55, 2.1],
      correctoption: 1.44
    },
    {
      no: 4,
      question: "Which State has the highest GDP",
      options: ["Maharashtra", "TamilNadu", "AndhraPradesh", "Kolkata"],
      correctoption: "Maharashtra"
    },
    {
      no: 5,
      question: "Which state is famous for its temples?",
      options: ["Tamilnadu", "Andhrapradesh", "Karnataka", "Madhyapradesh"],
      correctoption: "Tamilnadu"
    }
    
  ];
  const [cnt, setCnt] = useState(1);
  const [mark, setMark] = useState(1);
  const increaseMark = () =>{
    const selectedoption = document.querySelector('input[name="options"]:checked').value;
    const correctans = questions[cnt].correctoption;
    if(selectedoption === correctans){
      setMark(mark + 1);
    }
  }
  const increaseCnt = () =>{
    setCnt(cnt + 1);
  }
  const decreaseCnt = () =>{
    setCnt(cnt - 1);
  }
  const nextFunction = () =>{
      increaseCnt();
      increaseMark(cnt);
      console.log({mark});
      
  }
  const finishFunction = () =>{
   document.querySelector('#dispquestion').innerHTML = `You Scored ${mark} out of 5`;   
  }
  
  
return(
    <div className="App">
        <div id="dispquestion">{questions[cnt].question}
        <input type="radio" name="options" value = {questions[cnt].options[0]}/> <label>{questions[cnt].options[0]}</label>
        <input type="radio" name="options" value = {questions[cnt].options[1]}/> <label>{questions[cnt].options[1]}</label>
        <input type="radio" name="options" value = {questions[cnt].options[2]}/> <label>{questions[cnt].options[2]}</label>
        <input type="radio" name="options" value = {questions[cnt].options[3]}/> <label>{questions[cnt].options[3]}</label>
        <div disabled={cnt === 5}>Question Number : {cnt}</div>
        
        <button onClick={decreaseCnt} disabled={cnt === 1}>Prev</button>
        <button onClick={nextFunction} disabled={cnt === 5}>Next</button>
        </div>
        {cnt === 5 && <button onClick={finishFunction}>Finish</button>}
        
        
        
    </div>
  );
}

export default App;
