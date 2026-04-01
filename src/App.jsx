import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import State from './Components/State'
import StartCard from './Components/StartCard'
import Plan from './Components/Plan'
import WorkFlow from './Components/WorkFlow'
import Footer from './Components/Footer'
import Banner from './Components/Banner'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>
      <StartCard></StartCard>
      <Plan></Plan>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
