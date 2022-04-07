const addScore = async (user, score) => {
  const addUserScore = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SRYS7JHHhXANag7HC4Xc/scores',
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
  ).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
  return addUserScore;
};

export default addScore;
