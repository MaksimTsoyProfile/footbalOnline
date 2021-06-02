import { Button, Grid } from '@material-ui/core';
import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import {
  setDisabled, setMessages, setPenaltyMessages,
} from '../slices/data';
import messageMaker from '../utils/messageMaker';
import penaltyMessageMaker from '../utils/penaltyMessageMaker';
import setActions from '../utils/setActions';
import setPenaltyActions from '../utils/setPenaltyAction';

const MainContainer = () => {
  const { width, height } = useWindowSize();
  const goals = useSelector((state) => state.data.goals);
  const penaltyRealGoals = useSelector((state) => state.data.penaltyGoals.realGoals);
  const penaltyBarsaGoals = useSelector((state) => state.data.penaltyGoals.barsaGoals);
  const penaltyReal = useSelector((state) => state.data.penaltyGoals.real);
  const penaltyBarsa = useSelector((state) => state.data.penaltyGoals.barsa);
  const isEnd = useSelector((state) => state.data.isEnd);
  const isDraw = useSelector((state) => state.data.isDraw);
  const isDisabled = useSelector((state) => state.data.isDisabled);
  const dispatch = useDispatch();
  const texts = messageMaker(2);
  const penaltyTexts = penaltyMessageMaker(10);

  const handleStart = () => {
    dispatch(setDisabled(true));
    texts.forEach((text) => {
      setTimeout(async () => {
        await dispatch(setMessages(text.text));
        await dispatch(setActions(text.text.text));
      }, text.time);
    });
  };
  const handlePenaltyStart = () => {
    dispatch(setDisabled(true));
    penaltyTexts.forEach((text) => {
      setTimeout(async () => {
        await dispatch(setPenaltyMessages({
          penaltyMessage: text.text,
          position: text.position,
        }));
        await dispatch(setPenaltyActions(text.text));
      }, text.time);
    });
  };
  return (
    <>
      <Confetti
        width={width}
        height={height}
        run={isEnd}
      />
      <div className='main'>
        <Grid container>
          <Grid container item xs={6} alignItems='center' justify='center' direction='column'>
            <img src="../../img/real.png" alt="real" />
          </Grid>
          <Grid container item xs={6} alignItems='center' justify='center' direction='column'>
            <img src="../../img/barsa.png" alt="barsa" />
          </Grid>
          <Grid container item xs={6} alignItems='center' justify='center'>
            <div className='number'>{goals.real}</div>
          </Grid>
          <Grid container item xs={6} alignItems='center' justify='center'>
            <div className='number'>{goals.barsa}</div>
          </Grid>
          <Grid container item xs={12}>
            {penaltyReal.length > 0 ? (
              <Grid container item xs={5} style={{ marginLeft: '70px' }}>
                {penaltyReal.map((penR) => (
                  <div className={penR} key={uniqueId()} />
                ))}
              </Grid>
            ) : null}
            {penaltyBarsa.length > 0 ? (
              <Grid container item xs={5} style={{ marginLeft: '70px' }}>
                {penaltyBarsa?.map((penB) => (
                  <div className={penB} key={uniqueId()} />
                ))}
              </Grid>
            ) : null }
          </Grid>
          {isDraw ? (
            <Grid item xs={12} style={{ textAlign: 'center', fontSize: '30px' }}>
              {`(${penaltyRealGoals} : ${penaltyBarsaGoals})`}
            </Grid>
          ) : null}
          <div className='button-container'>
            { isDraw ? (
              <Button onClick={handlePenaltyStart} variant='contained' color='primary' size='large' disabled={isDisabled}>
                Начать серию пенальти
              </Button>
            ) : (
              <Button onClick={handleStart} variant='contained' color='primary' size='large' disabled={isDisabled}>
                Начать матч
              </Button>
            )}
          </div>
        </Grid>
      </div>
    </>
  );
};

export default MainContainer;
