import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import State from './Components/State'
import StartCard from './Components/StartCard'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <State></State>
      <StartCard></StartCard>
    </>
  )
}

export default App
