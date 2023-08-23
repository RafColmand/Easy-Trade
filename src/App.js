import './App.css';

import React from "react"
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Initiation from './pages/Initiation/Initiation'
import Philosophy from './pages/Philosophy/Philosophy';
import Help from './pages/Help/Help';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Initiation/>}/>
            <Route path='/philosophy' element={<Philosophy/>} />
            <Route path='/help' element={<Help/>} />
            <Route path="/Details/:id" element={<Details/>}/>
          </Routes>
        <Footer /> 
      </Router>

    </div>
  );
}

export default App;
