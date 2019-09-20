import React from 'react'
import '../App.css'
import { Grid } from '@material-ui/core'

export default function CellBtn(props) {


    return (
        <div onClick={props.handleClick} style={{cursor:'pointer'}}>
            <Grid
                container
                direction='row'
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item>

                    <img style={{height:'30vh', width:'20vh'}} alt={props.name} src={props.img} id={props.name} />
                </Grid>
                <Grid item>

                    <p className='titulo'>{props.desc}</p>
                </Grid>
            </Grid>
        </div>
    )
}