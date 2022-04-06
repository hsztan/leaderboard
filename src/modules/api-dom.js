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
const addNewScoreForm = document.getElementById('add-score-form');
const submitBtn = document.getElementById('submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const showSuccessBtn = () => {
  nameInput.value = '';
  scoreInput.value = '';
  submitBtn.style.backgroundColor = '#000';
  submitBtn.style.color = '#fff';
  submitBtn.value = 'Success!!';
  setTimeout(() => {
    submitBtn.style.backgroundColor = '#fff';
    submitBtn.style.color = '#000';
    submitBtn.value = 'Submit';
  }, 1000);
};

const createNewGame = (gameName) => async () => {
  const gameData = await createGame(gameName);
  // save game data in globals
  game.name = gameData.gameName;
  game.id = gameData.gameID;
  // set sendpoints with given id in globals
  endpoints.scores = `${endpoints.games}${game.id}/scores/`;
};

const showAllScores = async () => {
  const scores = await getScores();
  // if there are new scores display them
  if (scores.length > state.scoresCount) {
    state.scoresCount = scores.length;
    scoresContainerUl.innerHTML = '';
    scores.forEach((score) => {
      const scoreEle = document.createElement('li');
      scoreEle.innerText = `${score.user}: ${score.score}`;
      scoresContainerUl.appendChild(scoreEle);
    });
  }
};

const submitNewScore = async (eve) => {
  eve.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  await createScore(name, score);
  // set styles and clear field after successfull submit
  showSuccessBtn();
};

const startApp = async () => {
  window.onload = createNewGame('Tic Tac Toe, Find That Foe!');
  await createNewGame('Tic Tac Toe, Find That Foe!')();
  addNewScoreForm.onsubmit = submitNewScore;
  getAllScoresBtn.onclick = showAllScores;
};

export default startApp;
