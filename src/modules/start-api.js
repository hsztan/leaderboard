import {
  game,
  endpoints,
  createGame,
  createScore,
  getScores,
} from './api-helpers';

const createNewGame = async () => {
  const gameData = await createGame('Tic Tac Toe, Find That Foe!');
  // save game data in globals
  game.id = gameData.gameID;
  game.name = gameData.gameName;
  // set sendpoints with given id in globals
  endpoints.scores = `${endpoints.games}${game.id}/scores/`;
};

const startApp = async () => {
  createNewGame();
};

export default startApp;
