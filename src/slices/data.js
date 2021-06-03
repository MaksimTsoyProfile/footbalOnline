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
    setRealGoals: (state) => {
      state.goals.real += 1;
    },
    setBarsaGoals: (state) => {
      state.goals.barsa += 1;
    },
    setIsDraw: (state) => {
      if (state.goals.real === state.goals.barsa) {
        state.isDraw = true;
        state.isDisabled = false;
      } else {
        state.isEnd = true;
        state.isDisabled = true;
      }
    },
    setMessages: (state, { payload: message }) => {
      state.messages.push({
        message: message.text,
        id: uniqueId(),
        position: message.position,
      });
    },
    setPenaltyRealGoals: (state, { payload: color }) => {
      state.penaltyGoals.realGoals += 1;
      state.penaltyGoals.real.push(color);
    },
    setPenaltyBarsaGoals: (state, { payload: color }) => {
      state.penaltyGoals.barsaGoals += 1;
      state.penaltyGoals.barsa.push(color);
    },
    setPenaltyRealNoGoals: (state, { payload: color }) => {
      state.penaltyGoals.real.push(color);
    },
    setPenaltyBarsaNoGoals: (state, { payload: color }) => {
      state.penaltyGoals.barsa.push(color);
    },
    setIsDrawPenalty: (state) => {
      if (state.penaltyGoals.realGoals === state.penaltyGoals.barsaGoals) {
        state.isDrawPenalty = true;
      } else {
        state.isEnd = true;
      }
    },
    setPenaltyMessages: (state, { payload: { penaltyMessage, position } }) => {
      state.messages.push({
        message: penaltyMessage.text,
        id: uniqueId(),
        position,
      });
    },
  },
});

export const {
  setMessages,
  setDisabled,
  setPenaltyMessages,
  setRealGoals,
  setBarsaGoals,
  setPenaltyRealGoals,
  setPenaltyBarsaGoals,
  setPenaltyRealNoGoals,
  setPenaltyBarsaNoGoals,
  setIsDraw,
  setIsDrawPenalty,
} = dataSlice.actions;
export default dataSlice.reducer;
