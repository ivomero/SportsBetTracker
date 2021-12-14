import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { FaWindows } from "react-icons/fa";

const Login = (props) => {
  // const[userName, setUserName]= useState("");
  // const[password, setPassword]= useState("");
  // const [currentUser, setCurrentUser] = useState();
  // const [jwt, setJwt] = useState();
  // const[userLogin, setUserLogin]= useState()

  // function getJWT() {
  //   const jwt = localStorage.getItem('token');
  //   setJwt(jwt);
  // }

  // function getUser() {
  //   try{
  //     const user = jwtDecode(jwt);
  //     console.log(user)
  //     setCurrentUser(user)
  //   } catch {

  //   }
  // }

  // useEffect(()=> {
  //     getJWT();
  // },[])
  // useEffect(()=> {
  //     console.log(jwt)
  //     getUser();
  // },[jwt])
  // useEffect(()=> {
  //     getUserLogin();
  //     console.log(userLogin)
  // },[user])

  // const getUserLogin = async () => {

  //     const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', { headers: {Authorization: 'Bearer ' + jwt}});
  //     setUserLogin(response.data);
  //     console.log(response.data)
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: props.username,
      password: props.password,
    };
    console.log("User Info: ", user);
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        user
      );
      console.log("Token results are: ", response.data);
      // add response to local storage.
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      props.getJWT();
      window.location = "/home";
    } catch (err) {
      console.log("Error rtv User login info: ", err);
    }
  };

  return (
    <div className="login">
      <h1 className="Head">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="username"
          placeholder="Username"
          onChange={(e) => props.setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={(e) => props.setPassword(e.target.value)}
        ></input>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
