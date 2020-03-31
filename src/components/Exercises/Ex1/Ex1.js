import React, { useEffect } from 'react'
import OrganellDrawer from './OrganellDrawer'
import { DndProvider } from 'react-dnd'
import Ex1svg from './ex1svg'
import MultiBackend, { Preview } from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import { Grid, Typography } from '@material-ui/core'
import '../../../App.css'

const generatePreview = ({ itemType, item, style }) => {
  console.log(item)
  return (
    <div
      style={{
        ...style,
        backgroundColor: 'red',
        height: '10em',
        width: '10em'
      }}
    >
      Generated
    </div>
  )
}


export default function Ex1(props) {
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState('')
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

  
  const [hits, setHits] = React.useState(0)
  const complete = props.complete
  useEffect(() => {
    if (hits >= 12) {
      complete()
    }
    // eslint-disable-next-line
  }, [hits])

  return (
    <div>
      <p className='titulo'>Arraste as organelas</p>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Typography
            variant='p'
            style={{
              fontStyle: 'normal',
              textAlign: 'center',
              fontSize: '1.3em'
            }}
          >
            Escolha a organela e, depois, arraste-a para o seu lugar
            correspondente na célula.
          </Typography>
          <OrganellDrawer
            open={open}
            organells={organells}
            openDrawer={() => {
              setOpen(true)
            }}
            closeDrawer={() => {
              setOpen(false)
            }}
            handleDrawer={() => {
              setOpen(true)
              setHidden('')
            }}
            hidden={hidden}
            hideDrawer={() => setHidden('hidden')}
            updateHidden={() => {
              setOpen(false)
              setHidden('')
            }}
          ></OrganellDrawer>
          <Ex1svg
            organells={organells}
            hit={() => {
              setHits(hits + 1)
            }}
            setUpdate={() => {
              setOpen(false)
            }}
          />
        </Grid>
        <Preview generator={generatePreview}></Preview>
      </DndProvider>
    </div>
  )
}
