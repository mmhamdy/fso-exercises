import React, { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>
  
const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text='positive' value={(good / (good + neutral + bad)) * 100 + '%'} />
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='good' onClick={() => setGood(good + 1)}/>
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)}/>
      <Button text='bad' onClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App