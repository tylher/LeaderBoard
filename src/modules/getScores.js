const getScoresFunc = () => {
  const getScores = fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zD75K06bGt7kuSalEdJK/scores',
  )
    .then((res) => res.json());
  return getScores;
};

export default getScoresFunc;
