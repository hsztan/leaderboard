import {
  game,
  endpoints,
  createGame,
  createScore,
  getScores,
} from './api-helpers';

// state
const state = { scoresCount: 0 };

// DOM elements
const getAllScoresBtn = document.getElementById('refresh-btn');
const scoresContainerUl = document.getElementById('scores');

const createNewGame = (gameName) => async () => {
  const gameData = await createGame(gameName);
  // save game data in globals
  game.name = gameData.gameName;
  game.id = gameData.gameID;
  // set sendpoints with given id in globals
  endpoints.scores = `${endpoints.games}${game.id}/scores/`;
};

const submitNewScore = async (user, score) => {
  await createScore(user, score);
};

const showAllScores = async () => {
  const scores = await getScores();
  if (scores.length > state.scoresCount) {
    state.scoresCount = scores.length;
    scores.forEach((score) => {
      const scoreEle = document.createElement('li');
      scoreEle.innerText = `${score.user}: ${score.score}`;
      scoresContainerUl.appendChild(scoreEle);
    });
  }
};

const startApp = async () => {
  window.onload = createNewGame('Tic Tac Toe, Find That Foe!');
  await createNewGame('Tic Tac Toe, Find That Foe!')();
  await submitNewScore('Henry', 100);
  await submitNewScore('Ron', 20);
  await submitNewScore('Hero', 30);
  await submitNewScore('Akif', 50);
  await submitNewScore('Tafara', 10);
  getAllScoresBtn.onclick = showAllScores;
};

export default startApp;
