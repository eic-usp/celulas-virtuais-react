import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { DndProvider } from 'react-dnd'
import Ex1svg from './ex1svg'
import MultiBackend from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import OrganellInfo from './OrganellInfo'
import OrganellGrid from './OrganellGrid'

const Ex1Desktop = props => {
  const organells = [
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
  ]

  const [selected, setSelected] = React.useState(null)
  const [hits, setHits] = React.useState(0)
  const complete = props.complete
  useEffect(() => {
    if (hits >= 12) {
      complete()
    }
    // eslint-disable-next-line
  }, [hits])

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
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={3}>
            <OrganellInfo organell={selected} />
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Ex1svg
                organells={organells}
                hit={() => {
                  setHits(hits + 1)
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <OrganellGrid
              organells={organells}
              showInfo={organell => {
                setSelected(organell)
              }}
            />
          </Grid>
        </Grid>
      </DndProvider>
    </>
  )
}

export default Ex1Desktop
