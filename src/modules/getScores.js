const getScoresFunc = async () => {
  const getScores = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SRYS7JHHhXANag7HC4Xc/scores',
  );
  return getScores.json();
};

export default getScoresFunc;
