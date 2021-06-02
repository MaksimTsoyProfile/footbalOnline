import { find } from 'lodash';
import { setRealGoals, setBarsaGoals } from '../slices/data';

const setActions = (message) => {
  const data = [
    {
      message: 'Реал забивает гол',
      action: setRealGoals(),
    },
    {
      message: 'Барселона забивает гол',
      action: setBarsaGoals(),
    },
  ];
  if (find(data, ['message', message])) {
    return find(data, ['message', message]).action;
  }
  return () => {};
};

export default setActions;
