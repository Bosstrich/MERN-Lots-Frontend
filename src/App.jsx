import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { ModalProvider } from './context/ModalContext'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Instructions from './pages/Instructions'
import Scripture from './pages/Scripture'
import About from './pages/About'

function App() {

  return (
    <ModalProvider>
      <Router>
        <Toaster/>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/instructions' element={<Instructions/>}></Route>
          <Route path='/scripture' element={<Scripture/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </ModalProvider>
  )
}

export default App
