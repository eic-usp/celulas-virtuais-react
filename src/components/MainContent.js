import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Celula from './svg/celulaAnimal.svg'
export default function MainContent(props) {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <p className='titulo'>SEJA BEM-VINDO(A)!</p>
      <Typography component='h1'>
        Vamos aprender mais sobre citologia?
      </Typography>

      <Grid item>
        <BigButton action={props.renderCells}>
          <h3>CONHEÇA AS CÉLULAS</h3>
        </BigButton>
      </Grid>
      <Grid item>
        <img
          alt='Célula Animal'
          style={{ position: 'relative' }}
          src={Celula}
        ></img>
      </Grid>
      <Grid item>
        <BigButton action={props.renderExercises}>
          <h3>EXERCÍCIOS</h3>
        </BigButton>
        
      </Grid>
    </Grid>
  )
}
