import React from 'react'
import '../App.css'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
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
            <div style={{alignContent:'center', alignItems: 'center'}}>

                <p className='titulo'>{props.name}</p>
                <ReactSVG
                    src={props.img}
                    afterInjection={(error, svg) => {
                        if (error) {
                            console.error(error)
                            return
                        }
                        console.log(svg)
                    }}
                    beforeInjection={svg => {
                        svg.classList.add('svg-class-name')
                        svg.setAttribute('style', 'width: 40vw')
                    }}
                    evalScripts="always"
                    fallback={() => <span>Error!</span>}
                    loading={() => <span>Loading</span>}
                    renumerateIRIElements={false}
                    wrapper="span"
                    className="wrapper-class-name"
                    onClick={(e) => {
                        console.log(e.target)
                    }}
                />
                
            </div>
        </Typography>
    )
}

CellPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};