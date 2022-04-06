import {
  game,
  endpoints,
  createGame,
  createScore,
  getScores,
} from './api-helpers';

const createNewGame = async (gameName) => {
  const gameData = await createGame(gameName);
  // save game data in globals
  game.name = gameData.gameName;
  game.id = gameData.gameID;
  // game.id = '0dMPYB8ET7ckKAnmOPlY';
  // game.name = gameName;
  // set sendpoints with given id in globals
  endpoints.scores = `${endpoints.games}${game.id}/scores/`;
};

const submitNewScore = async (user, score) => {
  await createScore(user, score);
};

const showAllScores = async () => {
  const scores = await getScores();
  console.log(scores);
};

const startApp = async () => {
  await createNewGame('Tic Tac Toe, Find That Foe!');
  await submitNewScore('Henry', 100);
  await submitNewScore('Ron', 20);
  await submitNewScore('Hero', 30);
  await submitNewScore('Akif', 50);
  await submitNewScore('Tafara', 10);
  await showAllScores();
};

export default startApp;
