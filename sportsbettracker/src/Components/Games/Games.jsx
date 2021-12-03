import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import './Games.css';


const Games = (props) => {
    const[games, setGames]= useState([])



    const getGames = async (search) => {

        try{
            let response = await axios.get(' https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&apiKey=ac2e471edb79cd7c4357c66c9a625f11')
            setGames(response.data)
            console.log("All games response: ", response.data)
            console.log(games)
        } catch (err) {
            console.log("An API error occured with games: ", err)
            console.log(games)
        }
}        
        

    
    useEffect(()=> {
        getGames()
    },[])

    return (
        <Fragment>
            <div className='GamesList'>
                <h1>Upcoming Games</h1>
                {games.map((game)=> (
                    <div className='Games'>
                        <h2 classname="away">{game.bookmakers[6].markets[0].outcomes[0].name}</h2>
                        <h2 className="away">{game.bookmakers[6].markets[0].outcomes[0].price}</h2>
                        <button className="away">Bet Unit</button>
                        <h2 className="home">{game.bookmakers[6].markets[0].outcomes[1].name}</h2>
                        <h2 className="home">{game.bookmakers[6].markets[0].outcomes[1].price}</h2>
                        <button className="home">Bet Unit</button>
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