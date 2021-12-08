import React, {useState, useEffect} from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Login = (props) => {
    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");
    const [currentUser, setCurrentUser] = useState();
    const [jwt, setJwt] = useState();
    const[userLogin, setUserLogin]= useState()
  
    function getJWT() {
      const jwt = localStorage.getItem('token');
      setJwt(jwt);
    }
  
    function getUser() {
      try{
        const user = jwtDecode(jwt);
        console.log(user)
        setCurrentUser(user)
      } catch {
  
      }
    }
  
    useEffect(()=> {
        getJWT();
    },[])
    useEffect(()=> {
        console.log(jwt)
        getUser();
    },[jwt])
    // useEffect(()=> {
    //     getUserLogin();
    //     console.log(userLogin)
    // },[user])
    
    // const getUserLogin = async () => {
        
    //     const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', { headers: {Authorization: 'Bearer ' + jwt}});
    //     setUserLogin(response.data);
    //     console.log(response.data)
    //   }
  
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let user ={
            "username": userName,
            "password": password,
        }
        console.log("User Info: ", user)
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
        console.log("Token results are: ", response.data)
        // add response to local storage.
        localStorage.setItem("token", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
        getJWT()
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
            <label>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Click Me</button>
        </form>
    )
}
export default Login; 