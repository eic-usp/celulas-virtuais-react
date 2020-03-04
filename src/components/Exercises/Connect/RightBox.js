import React from 'react'
import { Typography } from '@material-ui/core'
import CustomResponsive from '../../../CustomResponsive'

export default function RightBox(props){

    return(
        <div id={props.id} onClick={props.handleClick} className={props.className}>
            <Typography component='h1' style={{position:'absolute', maxWidth:CustomResponsive('5em','8em', '8em'), marginLeft:'20px', marginBottom:'10px'}} id={props.id}>{props.desc}</Typography>
        </div>
    )
}
//CustomResponsive('70px','80px', '130px')