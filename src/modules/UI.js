import { loadLeaderBoard, postNewScore } from './api.js';

const populateLeaderBoard = (leaders) => {
  const ulLeaderboard = document.getElementById('leaderboard');
  ulLeaderboard.innerHTML = '';
  leaders.forEach((leader) => {
    const liLeaders = document.createElement('li');
    liLeaders.className = 'leaders';
    liLeaders.textContent = `${leader.user}: ${leader.score}`;
    ulLeaderboard.appendChild(liLeaders);
  });
};

const formAddNewSubmit = (e) => {
  e.preventDefault();
  const scoreData = {
    user: document.getElementById('username').value,
    score: document.getElementById('score').value,
  };
  postNewScore(scoreData);
  document.getElementById('form-add-new').reset();
  e.stopPropagation();
};

const btnRefreshClick = (e) => {
  loadLeaderBoard(populateLeaderBoard);
  e.stopPropagation();
};

const renderUI = async () => {
  loadLeaderBoard(populateLeaderBoard);
  const btnRefresh = document.getElementById('btn-refresh');
  const formAddNew = document.getElementById('form-add-new');
  btnRefresh.addEventListener('click', btnRefreshClick);
  formAddNew.addEventListener('submit', formAddNewSubmit);
};

export default renderUI;
