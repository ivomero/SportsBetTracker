import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home/Home';
import Games from './Games/Games';
import Login from './Login/Login';
import Registration from "./Registration/Registration";
import Profile from "./Profile/Profile";
import axios from 'axios';
import { useState, useEffect } from 'react';


function App(props) {


  

  const postBet = async (e)=>{
    e.preventDefault();
    let bet ={  
        "user_id": 1,
        "unit_bet": 1,
        "game_id": 1,
    }
    let response = await axios.post('http://127.0.0.1:8000/bets/', bet);
    console.log(response.data)
}



  return (
    <div className="App">
      
      <Routes>
         <Route path="/" exact={true} element={<Login/>}>
         </Route>
         <Route path="/home" exact={true} element={<Home/>}>
         </Route>
         <Route path="/games" exact={true} element={<Games postBet={postBet} />}>
         </Route>
         <Route path ="/register" exact={true} element={<Registration />}>
         </Route>
         <Route path ="/profile" exact={true} element={<Profile />}>
         </Route>
       </Routes>

    </div>
  );
}
export default App;


