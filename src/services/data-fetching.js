import { CHMC, apiUrl } from "../constants/app-settings";

const randomize = (num = 1) => Math.trunc(Math.random() * num) + 1;

const fetchData = async (fn) => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const cardsData = data.map((card) => ({ ...card, size: randomize(CHMC) }));
  fn(cardsData);
};

export { fetchData };
