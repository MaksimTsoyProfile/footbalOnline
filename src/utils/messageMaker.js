import randomMessageMaker from './randomMessageMaker';

const messageMaker = (num) => {
  const messages = [{
    text: { text: 'Звучит стартовый свисток, матч начался!!!', position: 'center' },
    time: 1000,
  }];
  const iter = (n, t) => {
    if (n === 0) {
      messages.push({
        text: { text: 'Матч завершен', position: 'center' },
        time: t,
      });
      return messages;
    }
    messages.push({
      text: randomMessageMaker(9, 0),
      time: t,
    });
    return iter(n - 1, t + 2000);
  };
  return iter(num, 3000);
};

export default messageMaker;
