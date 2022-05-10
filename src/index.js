import './style.css';
import { getScores, postScore } from './modules/api.js';
import showNotification from './modules/userNotification.js';

const renderScores = async () => {
  const btnScores = document.getElementById('btn-scores');
  btnScores.addEventListener('click', renderScores);
  await getScores()
    .then((data) => data.result)
    .then((scores) => {
      const scoreList = document.getElementById('score-list');
      scoreList.innerHTML = '';
      scores.forEach((score) => {
        const listItem = `
        <li>${score.user}: ${score.score}</li>
        `;

        scoreList.innerHTML += listItem;
      });
    })
    .catch((error) => showNotification(error));
};

const submitScore = (nameInput, scoreInput) => {
  const data = {
    user: nameInput,
    score: scoreInput,
  };
  postScore(data);
};

const renderSubmit = () => {
  const btnSubmit = document.getElementById('btn-submit');
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    submitScore(nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  });
};

renderSubmit();
renderScores();
