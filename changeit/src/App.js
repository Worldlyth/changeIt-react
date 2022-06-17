import React from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import { Info } from './components/Info/Info'
import { Feedback } from './components/Feedback/Feedback'
import { Blog } from './components/Blog/Blog'
import { Checklist } from './components/Checklist/Checklist'
import { Footer } from './components/Footer/Footer'


const App = () => {
  return (
    <div className='page-container'>
      <Header/>
      <Info/>
      <Feedback/>
      <Blog/>
      <Checklist/>
      <Footer/>
    </div>
  )
}

export default App

