import showNotification from './userNotification.js';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/H51gNcuMTEMBiWnJRUJn/scores/';

const getScores = () => fetch(api)
  .then((response) => response.json());

const postScore = (data) => fetch(api, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(((response) => response.json()))
  .then((data) => {
    if (data.result) {
      showNotification('Score was submited succesfully');
    } else {
      showNotification('score was not submited');
    }
  })
  .catch((error) => {
    showNotification(error);
  });
export { getScores, postScore };
