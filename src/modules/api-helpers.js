import { endpoints, game } from './globals';

// returns game ID if creation successfull
const createGame = async () => {
  let gameID = null;
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        body: JSON.stringify({
          name: 'hello world',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
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
  return null || gameID;
};

// returns score if score creation is successfull
const createScore = async (user, score) => {
  try {
    const response = await fetch(endpoints.scores, {
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
      game.scores.push({ user, score });
    }
  } catch (error) {
    return error.message;
  }
  return null || { user, score };
};

// returns score if score creation is successfull
const getScores = async () => {
  let allScores = null;
  try {
    const response = await fetch(endpoints.scores);
    if (response.ok) {
      // get game ID
      const data = await response.json();
      allScores = data.result;
    }
  } catch (error) {
    return error.message;
  }
  return null || allScores;
};

export { createGame, createScore, getScores, endpoints, game };
