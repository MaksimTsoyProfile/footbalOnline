import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

export const initialState = {
  isEnd: false,
  isDisabled: false,
  isDraw: false,
  isDrawPenalty: false,
  messages: [],
  penaltyGoals: {
    realGoals: 0,
    barsaGoals: 0,
    real: [],
    barsa: [],
  },
  goals: {
    real: 0,
    barsa: 0,
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDisabled: (state, { payload: isDisabled }) => {
      state.isDisabled = isDisabled;
    },
    setMessages: (state, { payload: message }) => {
      if (message.text === 'Реал забивает гол') {
        state.goals.real += 1;
      }
      if (message.text === 'Барселона забивает гол') {
        state.goals.barsa += 1;
      }
      if (message.text === 'Матч завершен' && (state.goals.real === state.goals.barsa)) {
        state.isDraw = true;
        state.isDisabled = false;
      }
      if (message.text === 'Матч завершен' && (state.goals.real !== state.goals.barsa)) {
        state.isEnd = true;
        state.isDisabled = true;
      }
      state.messages.push({
        message: message.text,
        id: uniqueId(),
        position: message.position,
      });
    },
    setPenaltyMessages: (state, { payload: { penaltyMessage, position } }) => {
      if (penaltyMessage.text === 'Реал забивает гол') {
        state.penaltyGoals.realGoals += 1;
        state.penaltyGoals.real.push(penaltyMessage.color);
      }
      if (penaltyMessage.text === 'Реал не забивает гол') {
        state.penaltyGoals.real.push(penaltyMessage.color);
      }
      if (penaltyMessage.text === 'Барселона забивает гол') {
        state.penaltyGoals.barsaGoals += 1;
        state.penaltyGoals.barsa.push(penaltyMessage.color);
      }
      if (penaltyMessage.text === 'Барселона не забивает гол') {
        state.penaltyGoals.barsa.push(penaltyMessage.color);
      }
      if (penaltyMessage.text === 'Серия пенальти завершена' && (state.penaltyGoals.realGoals === state.penaltyGoals.barsaGoals)) {
        state.isDrawPenalty = true;
      }
      if (penaltyMessage === 'Серия пенальти завершена' && (state.penaltyGoals.realGoals !== state.penaltyGoals.barsaGoals)) {
        state.isEnd = true;
      }
      state.messages.push({
        message: penaltyMessage.text,
        id: uniqueId(),
        position,
      });
    },
  },
});

export const {
  setMessages, setDisabled, setPenaltyMessages,
} = dataSlice.actions;
export default dataSlice.reducer;
