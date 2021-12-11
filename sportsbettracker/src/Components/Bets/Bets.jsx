import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';

const Bets = (props) => {
    const[bet, setBet]= useState(0);

    // const postBet = async (e)=>{
    //     e.preventDefault();
        // let bet ={  
        //     "user_id": 0,
        //     "unit_bet": 0,
        //     "game_id": 0
        // }
    //     let response = await axios.post('http://127.0.0.1:8000/bets', bet);
    //     console.log(response.data)
    // }

    return(
        // <form onSubmit={handleSubmit}>
        //     <label>UserName</label>
        //     <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
        //     <label>Password</label>
        //     <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
        //     <button type='submit'>Click Me</button>
        // </form>
    )
}
export default Bets; 