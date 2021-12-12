import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const View = (props) => {
    const [games, setGames]= useState([])
    const[comments, setComments] = useState([])
    const[users, setUsers]= useState([])

    // const location = useLocation()
    // const { match } = location.state

    

    const getComments = async () => {
        
        try{
            let response = await axios.get("http://127.0.0.1:8000/comments/")
            setComments(response.data)
            console.log(response.data)
        } catch (err) {
            console.log("Error with API profile call", err)
        }

}

    const getGames = async () => {
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/games/")
            setGames(response.data)
            console.log(response.data)
        } catch (err) {
            console.log("Error with API profile call", err)
        }

}

    const getUsers = async () => {
        let jwt = localStorage.getItem('token')
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", { headers: {Authorization: 'Bearer ' + jwt}})
            setUsers(response.data)
            console.log(response.data)
        } catch (err) {
            console.log("Error with API profile call", err)
        }
        

}
    

    useEffect(()=> {
    getUsers()
    getGames()
    getComments()
    },[])

    return (
            <h1>{props.gameView.away_team} vs { props.gameView.home_team}</h1>
            //display username //display commnet
    )

}
export default View;