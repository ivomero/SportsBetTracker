/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, Fragment} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Games.css';




const Games = (props) => {
    const[games, setGames]= useState([])
    const[databaseGames, setDatabaseGames]=useState([])
    // const[matchUp, setMatchUp]= useState()




    const postComments = async () => {
        try{

            let comment ={  
                "user_id": 1,
                "comment": 0,
                "game_id": 1
            }
            let response = await axios.post('http://127.0.0.1:8000/comments/', comment)
            console.log(response.data)
            

        } catch (err) {
            console.log("An error occured with postComments: ", err)
            console.log(games)
        }
    }        


    const getGames = async () => {
        try{
            let response = await axios.get(' https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&apiKey=ac2e471edb79cd7c4357c66c9a625f11')
            setGames(response.data)
            // setMatchUp(response.data)
            console.log("All games response: ", response.data)
            
            // for (let i = 0; i < response.data.length; i++){
            //     postGame(response.data[i])
            // }

        } catch (err) {
            console.log("An API error occured with games: ", err)
            console.log(games)
        }
    }        
    const getDatabaseGames = async(e)=>{
  
        let response = await axios.get('http://127.0.0.1:8000/games/');
        setDatabaseGames(response.data)
        console.log(response.data)
        checkForDuplicateGames()
    
    }
    
    const checkForDuplicateGames = () => {
        console.log(games)
        console.log(databaseGames)
        if (games.length > 0 && databaseGames.length > 0){
        for (let i = 0; i < games.length; i++){
            let gamesObject = databaseGames.some(function(singleGame) {
                return games[i] === singleGame.api_game_id 
          
                })
          
            if (gamesObject === true){
              console.log('game already in database')
            } else{
            postGame(games[i])
        }

    }
    } 
}
  const postGame = async (game)=>{
        console.log(games)
    

    
    let testGame ={  
      "user_id": 2,
      "api_game_id": game.id,
      "away_team": game.away_team,
      "home_team": game.home_team,
      "start_time": game.commence_time,
      "winner": "1"
    }
    try{
  
    // let response = await axios.post('http://127.0.0.1:8000/games/', testGame);
    // console.log(response.data)
    // getDatabaseGames()
  
    }catch (err) {
      console.log("An API error occured with games: ", err)
      console.log(games)
    }
        console.log(testGame)
    
    }

    useEffect(()=> {
    getDatabaseGames()
    getGames()
    },[])

    const handleCommentSubmit = async (e, user, game)=>{
        e.preventDefault();
        let comment ={
            "user_id": user.user_id,
            "comment": props.comment,
            "game_id": game.id,
        }
        console.log("User Info: ", user)
        let response = await axios.post('http://127.0.0.1:8000/comments/', comment);
        console.log(response.data)
        
    }

    const handleViewGame = (matchUp) => {
        
            <Link 
                to={{
                        pathname: "/view",
                        match: matchUp
                    }}
                    />
        
            
    }
    
        

    return (
        <Fragment>
            <div className='GamesList'>
                <h1 className='upcoming'>Upcoming Games</h1>
                {games.map((game)=> (
                    <div className='Games'>
                        <h2 className="away">{game.bookmakers[6].markets[0].outcomes[0].name}</h2>
                        <h2 className="away">{game.bookmakers[6].markets[0].outcomes[0].price}</h2>
                        <button className="button" onClick={()=> props.postBet(game, game.away_team, props.currentUser)}>Bet Unit</button>
                        <h2 className="home">{game.bookmakers[6].markets[0].outcomes[1].name}</h2>
                        <h2 className="home">{game.bookmakers[6].markets[0].outcomes[1].price}</h2>
                        <h4>{game.commence_time}</h4>
                        <button className="button"  onClick={()=> props.postBet(game, game.home_team, props.currentUser)}>Bet Unit</button>
                        <form onSubmit={(e)=>handleCommentSubmit(e,props.currentUser, game)}>
                        <input type="text" placeholder="Write a Comment" onChange={(e)=> props.setComment(e.target.value)}></input>
                        <button type="submit">Comment</button>
                        </form>
                        <button onClick={()=>handleViewGame(game)}>View Comments</button>
                    </div>
                ))
            }
            </div>
        
        </Fragment>
    )


}

export default Games; 


// eslint-disable-next-line no-lone-blocks
{/* <h2>{games[0].bookmakers[6].markets[0].outcomes[0].name}</h2>
            <h2>{games[0].bookmakers[6].markets[0].outcomes[0].price}</h2> */}