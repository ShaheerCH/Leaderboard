const reqScoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jgweTJ0igN7L9TDWGyrr/scores/';
const ScoreURL = new Request(reqScoreURL);

const loadLeaderBoard = async (callBack) => {
  const response = await fetch(ScoreURL);
  const leaderBoard = await response.json();
  callBack(leaderBoard.result);
};

const postNewScore = async (scoreData) => {
  fetch(ScoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  })
    .then((response) => response.json())
    .then((score) => {
      console.log('New score added:', score);
    });
};

export { loadLeaderBoard, postNewScore };
