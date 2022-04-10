import { CHMC, apiUrl } from '../constants/app-settings';

const randomize = (num = 1) => Math.trunc(Math.random() * num) + 1;

const fetchData = async (fn) => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const cardsData = data.map((card) => ({ ...card, size: randomize(CHMC) }));
  fn(cardsData);
};

const postData = async (data) => {
  try {
    const res = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export { fetchData, postData };
