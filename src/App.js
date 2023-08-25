import './App.css';

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Initiation from './pages/Initiation/Initiation'
import Philosophy from './pages/Philosophy/Philosophy';
import Help from './pages/Help/Help';
import DetailsHelp from './pages/DetailsHelp/DetailsHelp';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Wallet from './pages/Wallet/Wallet';
import HelpDashboard from './pages/HelpDashboard/HelpDashboard';
import DetailsDashboard from './pages/DetailDashboard/DetailDashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Initiation/>}/>
          <Route path='/philosophy' element={<Philosophy/>} />
          <Route path='/help' element={<Help/>} />
          <Route path="/Details/:id" element={<DetailsHelp/>}/>
          <Route path="/DetailsDashboard/:id" element={<DetailsDashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/helpDashboard' element={<HelpDashboard/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
