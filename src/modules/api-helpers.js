import { endpoints, game } from './globals';

const TEMP_ID = '0dMPYB8ET7ckKAnmOPlY';
const scoresEndpoint = `${endpoints.games}${TEMP_ID}/scores/`;

// returns game ID if creation successfull
const createGame = async (gameName) => {
  const endpoint = endpoints.games;
  let gameID = null;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        name: game.name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      const data = await response.json();
      data.result.split(' ').forEach((word) => {
        if (word.length === 20) {
          gameID = word;
        }
      });
    }
  } catch (error) {
    return error.message;
  }
  return null || { gameID, gameName };
};

// returns score if score creation is successfull
const createScore = async (user, score) => {
  let scoreObj = null;
  try {
    const response = await fetch(scoresEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      const data = await response.json();
      scoreObj = data;
    }
  } catch (error) {
    return error.message;
  }
  return null || scoreObj;
};

// returns score if score creation is successfull
const getScores = async () => {
  let allScores = null;
  try {
    const response = await fetch(scoresEndpoint);
    if (response.ok) {
      // get game ID
      const data = await response.json();
      allScores = data;
    }
  } catch (error) {
    return error.message;
  }
  return null || allScores;
};

export { createGame, createScore, getScores, endpoints, game };
