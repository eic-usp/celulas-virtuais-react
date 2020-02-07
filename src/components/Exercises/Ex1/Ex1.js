import React from 'react'
import OrganellDrawer from './OrganellDrawer'
import { DndProvider } from 'react-dnd'
import Ex1svg from './ex1svg'
import MultiBackend from 'react-dnd-multi-backend'
import Preview from 'react-dnd-preview'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import { Grid, Typography } from '@material-ui/core'
import '../../../App.css'

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

  const generatePreview = ({type, item, style}) => {
     return <div style={style}>{type}</div>
  }

  return (
    <div>
      <p className='titulo'>Arraste as organelas</p>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Typography
            variant='h5'
            style={{ fontStyle: 'normal', textAlign: 'center' }}
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
        </Grid>
        <Ex1svg
          organells={organells}
          hits={() => {
            props.hit()
          }}
          setUpdate={() => {
            setOpen(false)
          }}
        />
        <Preview generator={generatePreview}></Preview>
      </DndProvider>
    </div>
  )
}
