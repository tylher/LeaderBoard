const createItem = (score) => {
  const li = document.createElement('li');
  li.innerHTML = score;
  return li;
};

export default createItem;