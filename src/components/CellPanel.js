import React from 'react'
import '../App.css'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function CellPanel(props) {

    const { value, index, ...other } = props
    return (
        <Typography
            style={{backgroundColor:'transparent'}}
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <div style={{alignContent:'center'}}>

                <p className='titulo'>{props.name}</p>
                <img style={{ height: '30vh', width: '40vw' }} id={props.name} src={props.img} />
            </div>
        </Typography>
    )
}

CellPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};