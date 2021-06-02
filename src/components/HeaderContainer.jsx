import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const HeaderContainer = () => {
  return (
    <div className='head'>
      <Grid container justify='center'>
        <Grid item>
          <Typography variant='h3'>Онлайн трансляции ТОПОВЫХ КЛУБОВ МИРА по футболу</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderContainer;
