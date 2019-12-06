import React from 'react'
import { Typography } from '@material-ui/core'
import CustomResponsive from '../../../CustomResponsive'

export default function RightBox(props){

    return(
        <div id={props.id} onClick={props.handleClick} className={props.className}>
            <Typography component='h1' style={{maxWidth:CustomResponsive('70px','80px', '130px'), marginLeft:'20px'}} id={props.id}>{props.desc}</Typography>
        </div>
    )
}