import React from 'react'
import { Button } from '@material-ui/core'



export default function BigButton(props) {

   

    return (
        <Button style={{
            backgroundColor: 'white',
            height: '120px',
            width: '50%',
            borderColor: '#1ABC9C',
            borderWidth: '2px',
            borderStyle:'solid',
            fontFamily: 'Luckiest Guy',
            textAlign: 'center',
            color: '#1ABC9C',
            WebkitTextStroke: '2px #fff',
            fontSize:'32px',
            borderRadius:'10px',
            margin:'10px'
        }}>
            {props.children}
        </Button>
    )
}