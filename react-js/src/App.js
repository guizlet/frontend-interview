import React from 'react'
import './App.css'
import LearnMode from './components/LearnMode'

const TERMS = [
  {
    id: 1,
    word: 'Nebraska',
    definition: 'Lincoln',
  },
  {
    id: 2,
    word: 'Massachusetts',
    definition: 'Boston',
  },
  {
    id: 3,
    word: 'California',
    definition: 'San Francisco',
  }
]

class App extends React.Component {

  render = () => {
    return (
      <LearnMode terms={TERMS} />
    )
  }
}

export default App
