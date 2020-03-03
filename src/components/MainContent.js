import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Celula from './svg/celulaAnimal.svg'
import CustomResponsive from '../CustomResponsive'
export default function MainContent(props) {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <p className='titulo' style={{ marginTop: '-.15em' }}>
        SEJA BEM-VINDO(A)!
      </p>
      <Typography component='h1' style={{ marginBottom: '2em' }}>
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
          style={{
            width: CustomResponsive('20em', '20em', '20em'),
            position: 'relative',
            marginTop: '-4.5em',
            marginBottom: '-4.5em',
            zIndex: '1'
          }}
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
