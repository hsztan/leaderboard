import {
  game,
  endpoints,
  createGame,
  createScore,
  getScores,
} from './api-helpers';

// state
const state = { submitted: false };

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
    submitBtn.value = 'Add Score';
  }, 1000);
};

const toggleStyleReloadBtn = () => {
  getAllScoresBtn.classList.toggle('data-ready');
};

const createNewGame = (gameName) => async () => {
  const gameID = await createGame(gameName);
  // save game data in globals
  game.name = gameName;
  game.id = gameID;
  // set endpoints with given id in globals
  endpoints.scores = `${endpoints.games}${game.id}/scores/`;
};

const showAllScores = async () => {
  if (state.submitted) {
    const scores = await getScores();
    scoresContainerUl.innerHTML = '';
    // display elements on dom
    scores.forEach((score) => {
      // create li
      const scoreEle = document.createElement('li');
      scoreEle.classList.add('profile');
      scoreEle.innerHTML = `
        <img
          class="picture"
          src="https://robohash.org/${score.user}.png"
          alt="robot"
        />
        <span class="name">${score.user}</span>
        <span class="score">${score.score}</span>
      `;
      scoresContainerUl.appendChild(scoreEle);
    });
    state.submitted = false;
    setTimeout(toggleStyleReloadBtn, 3000);
  }
};

const submitNewScore = async (eve) => {
  eve.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  await createScore(name, score);
  state.submitted = true;
  // set styles and clear field after successfull submit
  showSuccessBtn();
  toggleStyleReloadBtn();
};

const animateReloadBtn = () => {
  getAllScoresBtn.classList.add('reloading');
  setTimeout(() => getAllScoresBtn.classList.remove('reloading'), 3000);
};

const startApp = async () => {
  window.onload = createNewGame('Find That Foe!');
  addNewScoreForm.onsubmit = submitNewScore;
  getAllScoresBtn.addEventListener('click', showAllScores);
  getAllScoresBtn.addEventListener('click', animateReloadBtn);
};

export default startApp;
