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
    },
    {

    }

    
  ];
  const [cnt, setCnt] = useState(1);
  const [mark, setMark] = useState(1);

  
  const finishFunction = (no) =>{
    if(questions[cnt].options[no] === questions[cnt].correctoption){
      console.log("true");
      setMark(mark + 1);
      console.log(mark);     
  }
   document.querySelector('#dispquestion').innerHTML = `You Scored ${mark} out of 5`;   
   console.log(mark)
   console.log(questions[cnt].options[no], questions[cnt].correctoption)
  }

 const handleOption = (no) => {
 
  if(questions[cnt].options[no] === questions[cnt].correctoption){
    console.log("true");
    setMark(mark + 1);
    console.log(mark);     
}
if (cnt === 5) {
  finishFunction(no);
} else {
  setCnt(cnt + 1);
}
}
 
 

  
return(
    <div className="App">
        <div id="dispquestion">{questions[cnt].question}
        <br></br>
        <button onClick={()=>handleOption(0)}>{questions[cnt].options[0]}</button><br></br>
        <button onClick={()=>handleOption(1)}>{questions[cnt].options[1]}</button><br></br>
        <button onClick={()=>handleOption(2)}>{questions[cnt].options[2]}</button><br></br>
        <button onClick={()=>handleOption(3)}>{questions[cnt].options[3]}</button><br></br>
        <div disabled={cnt === 5}>Question Number : {cnt}</div>
        </div>
    
        
        
        
    </div>
  );
}

export default App;
