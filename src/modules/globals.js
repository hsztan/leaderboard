const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const endpoints = {
  games: `${baseUrl}games/`,
  scores: null,
};
const game = {
  id: null,
  name: null,
  scores: [],
};

export { endpoints, game };
