import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import State from './Components/State'
import StartCard from './Components/StartCard'
import Plan from './Components/Plan'
import WorkFlow from './Components/WorkFlow'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <State></State>
      <StartCard></StartCard>
      <Plan></Plan>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
