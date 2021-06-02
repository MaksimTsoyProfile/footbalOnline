const randomMessageMaker = (max, min) => {
  const mess = [
    {
      text: 'Реал забивает гол',
      position: 'left',
    },
    {
      text: 'Барселона забивает гол',
      position: 'right',
    },
    {
      text: 'игрок Реала получает желтую карточку',
      position: 'left',
    },
    {
      text: 'игрок Реала получает красную карточку',
      position: 'left',
    },
    {
      text: 'игрок Барсы получает желтую карточку',
      position: 'right',
    },
    {
      text: 'игрок Барсы получает красную карточку',
      position: 'right',
    },
    {
      text: 'игрок Реала попал в офсайд',
      position: 'left',
    },
    {
      text: 'игрок Барсы попал в офсайд',
      position: 'right',
    },
    {
      text: 'судья смотрит Вар',
      position: 'center',
    },
    {
      text: 'Болельщики просто в восторге',
      position: 'center',
    },
  ];
  return mess[Math.floor(Math.random() * (max - min + 1)) + min];
};

export default randomMessageMaker;
