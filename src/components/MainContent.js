import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Celula from './svg/celulaAnimal.svg'
import ShareBtn from './ShareBtn'
export default function MainContent() {

    let titleFont = {
        fontFamily: 'Luckiest Guy',
        textAlign: 'center',
        color: '#1ABC9C',
        WebkitTextStroke: '2px white',
        textShadow: '2px 2px 4px #000000'
    }

    let cellWidth, cellHeight
    if (window.screen.width < 768) {
        cellWidth = '70vw'
        cellHeight = '10vh'
    } else if (window.screen.width >= 768 && window.screen.width < 992) {
        cellWidth = '70vw'
        cellHeight = '10vh'
    } else if (window.screen.width >= 992 && window.screen.width) {
        cellWidth = '70vw'
        cellHeight = '50vh'
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
                        <BigButton>
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
                <ShareBtn></ShareBtn>

            </Typography>
        </Container>
    )
}