import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Anecdote = ({title, anecdote, votes}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const AnecdoteControls = ({voteControl, navControl}) => {
  return (
    <div>
      <Button text='vote' onClick={voteControl} /> 
      <Button text='next anecdote' onClick={navControl} />
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const maxVote = votes.indexOf(Math.max(...votes))

  const getNextAnecdote = () => {
    const getRandomInt = (max) => Math.floor(Math.random() * max)
    setSelected(getRandomInt(anecdotes.length))
  }

  const voteForAnecdote = () => {
    const currentAnedote = [...votes]
    currentAnedote[selected] += 1
    setVotes(currentAnedote)
  }

  if (maxVote === 0) {
    return (
      <div>
        <Anecdote title='Anecdote of the day' anecdote={anecdotes[selected]} votes={votes[selected]}/>
        <AnecdoteControls voteControl={voteForAnecdote} navControl={getNextAnecdote} />
        <h1>Anecdote with most votes</h1>
        <p>No votes yet</p>
      </div>
    )
  }

  return (
    <div>
      <Anecdote title='Anecdote of the day' anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <AnecdoteControls voteControl={voteForAnecdote} navControl={getNextAnecdote} />
      <Anecdote title='Anecdote with most votes' anecdote={anecdotes[maxVote]} votes={Math.max(...votes)}/>
    </div>
  )
}

export default App
