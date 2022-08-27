import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './screens/home';
import Coin from './screens/Coin';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<Coin/>} />
        </Routes>
      </div>
    </Router>)
}

export default App;

















//import CoinRow from './CoinRow';
//import React, { useEffect, useState } from 'react';
//import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";