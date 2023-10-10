import './App.css';
import React, {useState} from 'react'

function App() {
  const [random, setRandom] =useState(Math.floor(Math.random()*100))
  const [inputValue,setInputValue]=useState('')
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

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
      setCount(count+1)
      console.log(false)
    }else{
      console.log(true)
      console.log(count)
    }
    setShowModal(!showModal)
  }

  return (
    <div className="App">
    <h1>Guessing Game</h1>
    <p>Enter a guess from 1-100. Good luck</p>
    <input type="text" placeholder="Enter a guess" value={inputValue} onChange={InputChange}/>
    <div className="btn-box">
      <button className="btn give" onClick={Give}>Give a hint</button>
      <button className="btn submit" onClick={Submit}>Submit</button>
      <button className="btn start">Start over</button>
    </div>
    <div className='modal'>
      {count} cehdde tapdiniz
    </div>
    </div>
  );
}

export default App;
