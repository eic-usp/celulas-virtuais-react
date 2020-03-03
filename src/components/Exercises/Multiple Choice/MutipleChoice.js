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

  return (
    <div>
      <p className='titulo'>Responda Corretamente</p>
      <Typography variant='h5'>{props.question}</Typography>
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
              label={props.A}
              labelPlacement='end'
              style={{ fontSize: '2em' }}
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
      <div style={{ marginBottom: CustomResponsive('0', '0', '40vh') }} />
    </div>
  )
}
