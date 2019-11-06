import React from 'react'

export default function RightBox(props){

    return(
        <div id={props.id} onClick={props.handleClick} className={props.className}>
            <p id={props.id}>{props.desc}</p>
        </div>
    )
}