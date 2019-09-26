import React from 'react'
import { Button, Grid } from '@material-ui/core'
import CustomResponsive from '../CustomResponsive'


export default function BigButton(props) {


    const [bWidth, bHeight, fSize]  = CustomResponsive(['70vw','117px','22px'],['80vw','117px', '22px'],
    ['30vw', '211px', '32px'])

    return (
        <Grid item xs={12} sm={12}
        >
            
            <Button style={{
                backgroundColor: 'white',
                height:bHeight,
                width: bWidth,
                borderColor: '#1ABC9C',
                borderWidth: '2px',
                borderStyle: 'solid',
                fontFamily: 'Luckiest Guy',
                textAlign: 'center',
                color: '#1ABC9C',
                WebkitTextStroke: '2px #fff',
                fontSize: fSize,
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