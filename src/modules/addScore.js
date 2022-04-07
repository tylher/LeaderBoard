const addScore = (user, score) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zD75K06bGt7kuSalEdJK/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: user.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((res) => res.json())
    .then((result) => console.log(result));
};

export default addScore;
