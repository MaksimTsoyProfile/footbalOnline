import randomPenaltyMessageMaker from './randomPenaltyMessageMaker';

const penaltyMessageMaker = (num) => {
  const messages = [{
    text: { text: 'Начинается серия пенальти', color: '' },
    time: 1000,
    position: 'center',
  }];
  const iter = (n, t) => {
    if (n === 0) {
      messages.push({
        text: { text: 'Серия пенальти завершена', color: '' },
        time: t,
        position: 'center',
      });
      return messages;
    }
    if (n % 2) {
      messages.push({
        text: randomPenaltyMessageMaker('Барселона'),
        time: t,
        position: 'right',
      });
    } else {
      messages.push({
        text: randomPenaltyMessageMaker('Реал'),
        time: t,
        position: 'left',
      });
    }
    return iter(n - 1, t + 2000);
  };
  return iter(num, 3000);
};

export default penaltyMessageMaker;
