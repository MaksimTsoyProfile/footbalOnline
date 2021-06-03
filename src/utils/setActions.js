import { find } from 'lodash';
import {
  setRealGoals, setBarsaGoals, setIsDraw,
} from '../slices/data';

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
    {
      message: 'Матч завершен',
      action: setIsDraw(),
    },
  ];
  if (find(data, ['message', message])) {
    return find(data, ['message', message]).action;
  }
  return () => {};
};

export default setActions;
