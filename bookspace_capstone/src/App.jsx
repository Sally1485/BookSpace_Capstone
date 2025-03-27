import react from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/Home' 
import Explore from './components/Explore'
import Details from './components/Details'
import Library from './components/Library'


function App() {

  return (
    <div>
    <Router>
    <NavBar />
      
      <Routes>
               <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/details' element={<Details />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </Router>

    
    </div>
  )
}

export default App
