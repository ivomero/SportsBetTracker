import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./GameComments.css";
import { getGame, getGameComments } from "../api";
import { Comment } from "./Comment";

const GameComments = () => {
  const params = useParams();
  const gameId = params.id;
  const [comments, setComments] = useState([]);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    getGameComments(gameId).then((gameComments) => {
      setComments(gameComments);
    });
  }, [gameId]);

  useEffect(() => {
    getGame(gameId).then((game) => {
      setGameData(game);
    });
  }, [gameId]);

  return (
    <div className="viewDiv">
      <div>
        {gameData ? (
          <div className="displayGame">
            <h1>
              {gameData.home_team} vs {gameData.away_team}
            </h1>
          </div>
        ) : null}
      </div>
      <h2 className="cot">Comments:</h2>

      {comments.map((comment) => (
        <Comment text={comment.comment} userId={comment.user_id} />
      ))}
    </div>
  );
};
export default GameComments;
