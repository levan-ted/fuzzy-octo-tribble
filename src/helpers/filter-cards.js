export const filterCards = (cards, keywords) => {
  if (keywords.length === 0) return cards;

  const filtered = [];
  keywords.forEach((keyword) => {
    const matches = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(keyword) ||
        card.description.toLowerCase().includes(keyword)
    );
    filtered.push(...matches);
  });
  const uniqueList = filtered.filter(
    (value, index, self) => self.indexOf(self.find((el) => el.title === value.title)) === index
  );
  return uniqueList;
};
