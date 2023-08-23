import './App.css';

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Initiation from './pages/Initiation/Initiation'
import Philosophy from './pages/Philosophy/Philosophy';
import Help from './pages/Help/Help';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Initiation/>}/>
          <Route path='/philosophy' element={<Philosophy/>} />
          <Route path='/help' element={<Help/>} />
          <Route path="/Details/:id" element={<Details/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
