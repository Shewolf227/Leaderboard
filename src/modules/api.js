import showNotification from './userNotification.js';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/H51gNcuMTEMBiWnJRUJn/scores/';
const postMessage = document.getElementById('post-message');

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
      postMessage.classList.add('success-message');
      postMessage.classList.remove('error-message');
    } else {
      showNotification('score was not submited');
      postMessage.classList.add('error-message');
      postMessage.classList.remove('success-message');
    }
  })
  .catch((error) => {
    showNotification(error);
  });
export { getScores, postScore };
