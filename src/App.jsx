import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import State from './Components/State'
import StartCard from './Components/StartCard'
import Plan from './Components/Plan'
import WorkFlow from './Components/WorkFlow'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <State></State>
      <StartCard></StartCard>
      <Plan></Plan>
      <WorkFlow></WorkFlow>
    </>
  )
}

export default App
