import React from 'react'
import { Button, Grid } from '@material-ui/core'


export default function BigButton(props) {

    let btnWidth
    let btnHeight = '117px'
    let fontSize = '22px'

    if(window.screen.width < 768){
        btnWidth = '70vw'
    }else if(window.screen.width >=768 && window.screen.width < 992){
        btnWidth = '80vw'
    }else if(window.screen.width >=992 && window.screen.width){
        btnWidth = '30vw'
        btnHeight  = '211px'
        fontSize = '32px'
    }

    return (
        <Grid item xs={24} sm={24}
        >
            
            <Button style={{
                backgroundColor: 'white',
                height:btnHeight,
                width: btnWidth,
                borderColor: '#1ABC9C',
                borderWidth: '2px',
                borderStyle: 'solid',
                fontFamily: 'Luckiest Guy',
                textAlign: 'center',
                color: '#1ABC9C',
                WebkitTextStroke: '2px #fff',
                fontSize: fontSize,
                borderRadius: '10px',
                margin: '10px'
            }}
            onClick={props.action}
            >
                {props.children}
            </Button>
        </Grid>
    )
}