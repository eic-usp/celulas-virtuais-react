import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Celula from './svg/celulaAnimal.svg'
export default function MainContent(props) {

    let titleFont = {
        fontFamily: 'Luckiest Guy',
        textAlign: 'center',
        color: '#1ABC9C',
        WebkitTextStroke: '2px white',
        textShadow: '2px 2px 4px #000000'
    }

    return (
        <Container>
            <Typography style={{ textAlign: 'center' }}>
                <h1 style={titleFont}>SEJA BEM-VINDO(A)!</h1>
                <p>Vamos aprender mais sobre citologia?</p>
                <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                >
                    <Grid item sm={12} xs={12}>
                        <BigButton action={props.renderCells}>
                            <h3>
                                CONHEÇA AS CÉLULAS
                            </h3>
                        </BigButton>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <img alt='Célula Animal' src={Celula} ></img>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <BigButton>
                            <h3>
                                EXERCÍCIOS
                            </h3>
                        </BigButton>
                    </Grid>
                </Grid>

            </Typography>
        </Container>
    )
}