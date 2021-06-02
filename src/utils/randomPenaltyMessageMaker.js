const randomPenaltyMessageMaker = (str) => {
  const mess = [
    {
      text: `${str} забивает гол`,
      color: 'green',
    },
    {
      text: `${str} не забивает гол`,
      color: 'red',
    },
  ];
  return mess[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
};

export default randomPenaltyMessageMaker;
