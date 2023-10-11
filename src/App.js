import './App.css';
import React, {useState} from 'react'

function App() {
  const [random, setRandom] =useState(Math.floor(Math.random()*100))
  const [inputValue,setInputValue]=useState('')
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState("none")

  console.log(random)

  const InputChange =(e)=>{
    setInputValue(e.target.value)
  }

  const Give =()=>{
    var randomRound = Math.round(random / 10) * 10
    alert(`The number is near ${randomRound}s`)
  }
  
  const Submit =()=>{
    if(+inputValue!==random){
      alert(false)
      setCount(count+1)
      setInputValue('')
    }else{
      setModal("flex")
      console.log(count)
    }
  }
  const closeModal=()=>{
    setModal("none")
  }
  const Start=()=>{
    setRandom(Math.floor(Math.random()*100))
    setCount(0)
    setInputValue('')
    console.log(random)
  }

  return (
    <div className="App">
    <h1>Guessing Game</h1>
    <p>Enter a guess from 1-100. Good luck</p>
    <input type="text" placeholder="Enter a guess" value={inputValue} onChange={InputChange}/>
    <div className="btn-box">
      <button className="btn give" onClick={Give}>Give a hint</button>
      <button className="btn submit" onClick={Submit}>Submit</button>
      <button className="btn start" onClick={Start}>Start over</button>
    </div>
    <div className='modal' style={{display:modal}}>
      <h2>Success</h2>
      Effort: {count}
      <button className='btn close' onClick={closeModal}>Close</button>
    </div>
    </div>
  );
}

export default App;
