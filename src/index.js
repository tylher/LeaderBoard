import './style.css';
import createItem from './modules/createItem.js';
import getScoresFunc from './modules/getScores.js';
import addScore from './modules/addScore.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const user = document.querySelector('input[type=text]');
const score = document.querySelector('input[type=number]');
const scoreHolder = document.querySelector('ul');

submit.addEventListener('click', async () => {
  await addScore(user, score).then((msg) => console.log(msg)).catch((err) => console.log(err));
});

refresh.addEventListener('click', async () => {
  const data = await getScoresFunc().then((result) => result);
  scoreHolder.innerHTML = '';
  data.result.forEach(({ user, score }) => {
    const userTemp = `${user} : ${score}`;
    const htmlTemp = createItem(userTemp);
    scoreHolder.append(htmlTemp);
  });
});

score.addEventListener('keyup', async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    await submit.click();
    setTimeout(() => refresh.click(), 2000);
  }
});
