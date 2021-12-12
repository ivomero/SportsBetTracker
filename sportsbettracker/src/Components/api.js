import axios from "axios";

export const getUsers = async () => {
  try {
    let jwt = localStorage.getItem("token");
    let response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", {
      headers: { Authorization: "Bearer " + jwt },
    });

    return response.data;
  } catch (err) {
    console.log("Error with API profile call", err);
  }
};

export const getUser = async (userId) => {
  const allUsers = await getUsers(); // getUsers is your function
  return allUsers.find((user) => user.id === userId);
};

export const getComments = async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/comments/");

    return response.data;
  } catch (err) {
    console.log("Error with API profile call", err);
  }
};

export const getGames = async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/games/");

    return response.data;
  } catch (err) {
    console.log("Error with API profile call", err);
  }
};

export const getGame = async (apiGameId) => {
  const allGames = await getGames();

  return allGames.find((game) => game.api_game_id === apiGameId);
};

export const getGameComments = async (apiGameId) => {
  const allComments = await getComments();
  const allGames = await getGames();
  const gameId = allGames.find((game) => game.api_game_id === apiGameId).id;
  return allComments.filter((comment) => comment.game_id === gameId);
};
