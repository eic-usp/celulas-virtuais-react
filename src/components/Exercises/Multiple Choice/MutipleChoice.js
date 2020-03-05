import React from 'react'
import {
  Typography,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core'
import '../../../App.css'
import CustomResponsive from '../../../CustomResponsive'
/*
    Component mounts a multiple choice exercise with a question and 5 possible answers
*/
export default function MultipleChoice(props) {
  const [selectedValue, setSelectedValue] = React.useState('')

  //Checks for right answer
  const handleChange = event => {
    setSelectedValue(event.target.value)
    if (event.target.value === props.answer) {
      props.complete()
    } else {
      props.false()
    }
  }
  const labelStyle = {
    fontSize: '1.2em',
    marginBottom: '.8em'
  }
  return (
    <div>
      <p className='titulo' style={{textAlign:'left'}}>Responda Corretamente</p>
      <Typography variant='h5'  style={{marginBottom:'.5em'}}>{props.question}</Typography>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='question'
          name='exercise'
          value={selectedValue}
          onChange={handleChange}
          column
        >
          <FormControlLabel
            value='a'
            control={<Radio color='primary' />}
            label={
              <div style={labelStyle}>
                {props.A}
              </div>
            }
            labelPlacement='end'
          />
          <FormControlLabel
            value='b'
            control={<Radio color='primary' />}
            label={
              <div style={labelStyle}>
                {props.B}
              </div>
            }
            labelPlacement='end'
          />
          <FormControlLabel
            value='c'
            control={<Radio color='primary' />}
            label={
              <div style={labelStyle}>
                {props.C}
              </div>
            }
            labelPlacement='end'
          />
          <FormControlLabel
            value='d'
            control={<Radio color='primary' />}
            label={
              <div style={labelStyle}>
                {props.D}
              </div>
            }
            labelPlacement='end'
          />
          <FormControlLabel
            value='e'
            style={{ marginBottom: '2em' }}
            control={<Radio color='primary' />}
            label={
              <div style={labelStyle}>
                {props.E}
              </div>
            }
            labelPlacement='end'
          />
        </RadioGroup>
      </FormControl>
      <div style={{ marginBottom: CustomResponsive('0', '0', '26em') }} />
    </div>
  )
}
