import React, {useEffect} from 'react'
import { Typography, Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core'
import '../../../App.css'
export default function MultipleChoice(props){
    const [selectedValue, setSelectedValue] = React.useState('')
    const handleChange = event =>{
        setSelectedValue(event.target.value)
        
    }
    useEffect(()=>{
        if (selectedValue === props.answer) {
          props.complete();
        } else {
          props.false();
        }
    }, [selectedValue])
    return(
        <div>
            <p className='titulo'>Responda Corretamente</p>
            <Typography>{props.question}</Typography>
            <FormControl component='fieldset'>
                <RadioGroup aria-label='question' name='exercise' value={selectedValue} onChange={handleChange} column>
                    <FormControlLabel 
                        value='a'
                        control={<Radio color='primary' />}
                        label={props.A}
                        labelPlacement='end'
                    />
                    <FormControlLabel 
                        value='b'
                        control={<Radio color='primary' />}
                        label={props.B}
                        labelPlacement='end'
                    />
                    <FormControlLabel 
                        value='c'
                        control={<Radio color='primary' />}
                        label={props.C}
                        labelPlacement='end'
                    />
                    <FormControlLabel 
                        value='d'
                        control={<Radio color='primary' />}
                        label={props.D}
                        labelPlacement='end'
                    />
                    <FormControlLabel 
                        value='e'
                        control={<Radio color='primary' />}
                        label={props.E}
                        labelPlacement='end'
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )

}