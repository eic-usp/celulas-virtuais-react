import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import '../App.css'
import BigButton from './BigButton'
import Logo from './logo.svg'

export default function MainContent() {

    let titleFont = {
        fontFamily: 'Luckiest Guy',
        textAlign: 'center',
        color: '#1ABC9C',
        WebkitTextStroke: '2px white',
        fontSize: '45px',
        textShadow: '2px 2px 4px #000000'
    }

    return (
        <Container>
            <Typography style={{ textAlign: 'center' }}>
                <p style={titleFont}>SEJA BEM-VINDO(A)!</p>
                <p>Vamos aprender mais sobre citologia?</p>
                <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                >
                    <BigButton>CONHEÇA AS CÉLULAS</BigButton>
                    <img src={Logo} style={{position:'absolute'}}></img>
                    <BigButton>EXERCÍCIOS</BigButton>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Typography>
        </Container>
    )
}