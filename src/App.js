import React from 'react'
import Homepage from './components/Homepage/Homepage'
import './App.scss'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Homepage orderBy="score" sort="desc"/>
    </div>
  )
}
