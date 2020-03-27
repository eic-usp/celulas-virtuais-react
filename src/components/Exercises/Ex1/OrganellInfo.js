import React from 'react'
import { Grid } from '@material-ui/core'

const OrganellInfo = props => {
  const organell =
    props.organell === null
      ? { name: 'Selecione uma organela' }
      : props.organell

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      {props.organell === null ? (
        <></>
      ) : (
        <img
          src={organell.gif}
          style={{
            width: '8em',
            height: '5em',
            borderRadius: '5px',
            alignSelf: 'center',
            border: 'none'
          }}
          alt='organell'
        />
      )}
      <p className='titulo' style={{ fontSize: '1.8em', float: 'top' }}>
        {organell.name}
      </p>
      <p
        style={{
          width: '80%',
          textAlign: 'justify',
          height: '15em',
          overflowY: props.organell === null ? 'auto' : 'scoll'
        }}
      >
        {organell.desc}
      </p>
    </Grid>
  )
}

export default OrganellInfo
