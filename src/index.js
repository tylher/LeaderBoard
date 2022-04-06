import './style.css';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const user = document.querySelector('input[type=text]');
const score = document.querySelector('input[type=number]');
submit.addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zD75K06bGt7kuSalEdJK/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json()).then((result) => console.log(result));
});

refresh.addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zD75K06bGt7kuSalEdJK/scores', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json()).then((result) => {
    console.log(result);
  });
});
