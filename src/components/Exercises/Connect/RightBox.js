import React from 'react'
import { Typography } from '@material-ui/core'

export default function RightBox(props){

    return(
        <div id={props.id} onClick={props.handleClick} className={props.className}>
            <Typography component='h1' style={{maxWidth:'70px', marginLeft:'20px'}} id={props.id}>{props.desc}</Typography>
        </div>
    )
}