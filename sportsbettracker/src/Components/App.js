import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Games from "./Games/Games";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Profile from "./Profile/Profile";
import axios from "axios";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Navbar from "./Nav/Nav";
import View from "./View/View";
import GameComments from "./GameComments/GameComments";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [jwt, setJwt] = useState();
  const [userLogin, setUserLogin] = useState();
  const [comment, setComment] = useState("");

  function getJWT() {
    const jwt = localStorage.getItem("token");
    setJwt(jwt);
  }

  function getUser() {
    try {
      const user = jwtDecode(jwt);
      console.log(user);
      setCurrentUser(user);
    } catch {}
  }

  useEffect(() => {
    getJWT();
  }, []);
  useEffect(() => {
    console.log(jwt);
    getUser();
  }, [jwt]);

  const postBet = async (game, team, user) => {
    console.log(user);
    let bet = {
      user_id: user.user_id,
      unit_bet: 1,
      team: team,
      game_id: game.id,
    };
    let response = await axios.post("http://127.0.0.1:8000/bets/", bet);
    console.log(response.data);
    alert("Your bet has been placed");
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <Login
              setUsername={setUsername}
              username={username}
              setPassword={setPassword}
              password={password}
              getJWT={getJWT}
            />
          }
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/games"
          element={
            <Games
              postBet={postBet}
              currentUser={currentUser}
              setComment={setComment}
              comment={comment}
            />
          }
        ></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path ="/view" exact={true} element={<View />}>
         </Route> */}
        <Route path="/game-comments/:id" element={<GameComments />}></Route>
      </Routes>
    </div>
  );
}
export default App;
