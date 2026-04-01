import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import State from './Components/State'
import StartCard from './Components/StartCard'
import Plan from './Components/Plan'
import WorkFlow from './Components/WorkFlow'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import Tabs from './Components/Tabs'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>
      <Tabs></Tabs>
      <StartCard></StartCard>
      <Plan></Plan>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
