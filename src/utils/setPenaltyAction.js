import { find } from 'lodash';
import {
  setPenaltyRealGoals, setPenaltyBarsaGoals, setPenaltyBarsaNoGoals, setPenaltyRealNoGoals, setIsDrawPenalty,
} from '../slices/data';

const setPenaltyActions = (obj) => {
  const data = [
    {
      message: 'Реал забивает гол',
      action: setPenaltyRealGoals(obj.color),
    },
    {
      message: 'Барселона забивает гол',
      action: setPenaltyBarsaGoals(obj.color),
    },
    {
      message: 'Реал не забивает гол',
      action: setPenaltyRealNoGoals(obj.color),
    },
    {
      message: 'Барселона не забивает гол',
      action: setPenaltyBarsaNoGoals(obj.color),
    },
    {
      message: 'Серия пенальти завершена',
      action: setIsDrawPenalty(),
    },
  ];
  if (find(data, ['message', obj.text])) {
    return find(data, ['message', obj.text]).action;
  }
  return () => {};
};

export default setPenaltyActions;
