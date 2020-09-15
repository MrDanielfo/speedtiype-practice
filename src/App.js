import React, { useEffect, useState } from 'react';
import './App.css';

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */


function App() {

  // CONST
  const STARTING_TIME = 10

  const [text, setText] = useState("")
  const [time, setTime] = useState(STARTING_TIME)
  const [startGame, setStartGame] = useState(false)
  const [wordNumber, setWordNumber] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target
    setText(value)
    wordCount(value)
  }

  const countDownActive = () => {
    //console.log(startGame)
    // Setteando valores
    setTime(STARTING_TIME)
    setWordNumber(0)
    setText("")
    setStartGame(true)
    setButtonDisabled(true)
  }

  const countDownInactive = () => {
    setStartGame(false)
    setButtonDisabled(false)
  }

  
  // console.log(time)
  const wordCount = word => {
    // let wordNumbers = 1;
    const wordSplit = word.trim().split(' ')
    // console.log(wordSplit.filter(word => word !== "").length)
    const words = wordSplit.filter(word => word !== "").length
    setWordNumber(words)
    //return wordSplit.filter(word => word !== "").length
  }

  useEffect(() => {
      if (startGame && time > 0) {
        setTimeout(() => {
          setTime(prevTime => prevTime - 1)
        }, 1000) 
      } else if (time === 0) {
          countDownInactive()
      }
   
  }, [time, startGame])

  return (
    <div>
      <br />
      <h1>SpeedType Exercise</h1>
      <textarea onChange={handleChange} name="text" value={text} disabled={time === 0 || !startGame} />

      <br />
      <h4>Time remaining {time}</h4>
      <br />
      <button disabled={buttonDisabled} onClick={countDownActive}>Start Typing!</button>
      <h2>Word Count: {wordNumber}</h2>
    </div>
  );

}

export default App;

/*

wordSplit.forEach(letter => {
    //   // console.log(letter)
    //   if (letter === '') {
    //       wordNumbers++
    //   }
    // })
    // console.log(wordNumbers)
    // return wordNumbers
    // console.log(wordSplit)

*/