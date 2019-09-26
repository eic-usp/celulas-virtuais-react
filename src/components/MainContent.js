import React from 'react'
import { Grid } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Celula from './svg/celulaAnimal.svg'
export default function MainContent(props) {


    return (
        <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
        >
            <p className='titulo'>SEJA BEM-VINDO(A)!</p>
            <p style={{ textAlign: 'center' }}>
                Vamos aprender mais sobre citologia?
            </p>

            <Grid item>
                <BigButton action={props.renderCells}>
                    <h3>
                        CONHEÇA AS CÉLULAS
                    </h3>
                </BigButton>
            </Grid>
            <Grid item>
                <img alt='Célula Animal' src={Celula} ></img>
            </Grid>
            <Grid item>
                <BigButton>
                    <h3>
                        EXERCÍCIOS
                    </h3>
                </BigButton>
            </Grid>

        </Grid >
    )
}