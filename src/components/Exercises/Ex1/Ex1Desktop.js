import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { DndProvider } from 'react-dnd'
import Ex1svg from './ex1svg'
import MultiBackend from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import OrganellInfo from './OrganellInfo'
import OrganellGrid from './OrganellGrid'

const Ex1Desktop = props => {
  const [organells] = React.useState([
    'nucleo',
    'membPlasm',
    'retEndLis',
    'retEndRug',
    'mitocondria',
    'vesicula',
    'golgi',
    'peroxissomo',
    'ribossomo',
    'lisossomo',
    'centriolos',
    'citoesqueleto'
  ])

  return (
    <>
      <p className='titulo'>Arraste as Organelas</p>
      <Typography
        variant='h5'
        style={{
          fontStyle: 'normal',
          textAlign: 'center',
          marginBottom: '1em'
        }}
      >
        Escolha a organela e, depois, arraste-a para o seu lugar correspondente
        na célula.
      </Typography>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <OrganellInfo />
          </Grid>
          <Grid item>
            <Ex1svg
              organells={organells}
              hits={() => {
                props.hit()
              }}
              setUpdate={() => {
                //setOpen(false)
              }}
            />
          </Grid>
          <Grid item>
            <OrganellGrid organells={organells} />
          </Grid>
        </Grid>
      </DndProvider>
    </>
  )
}

export default Ex1Desktop
