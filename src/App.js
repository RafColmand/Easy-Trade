import './App.css';

import React, {useState} from "react"
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
import StockContext from "./Context/StockContext";
import Orders from "./pages/Orders/Orders"
import Payments from "./pages/Payments/Payments"
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword"
import RegisterCard from './pages/RegisterCard/RegisterCard';

function App() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <div className='App'>
      <Router>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
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
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/payments' element={<Payments/>}/>
          <Route path='/updatePassword' element={<UpdatePassword/>}/>
          <Route path='/registerCard' element={<RegisterCard/>}/>
        </Routes>
        </StockContext.Provider>
      </Router>
      

    </div>
  );
}

export default App;
