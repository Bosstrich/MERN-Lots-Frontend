import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Instructions from './pages/Instructions'
import Scripture from './pages/Scripture'
import About from './pages/About'

function App() {

  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/instructions' element={<Instructions/>}></Route>
          <Route path='/scripture' element={<Scripture/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
