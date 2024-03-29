import React from 'react'
import '../App.css'
import { Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import CustomResponsive from '../CustomResponsive'
import OrganellCard from './OrganellCard'
import Organells from './json/Organells'

export default function CellPanel(props) {
  const { value, index, img, ...other } = props
  const [openCard, setOpen] = React.useState(false)
  const [organell, setOrganell] = React.useState('')
  let width = CustomResponsive('20em', '30em', '50em')
  let margin = CustomResponsive('-3em', '0', '0')
  return (
    <Typography
      style={{ backgroundColor: 'transparent' }}
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <p
        className='titulo'
        style={{ marginBottom: '-.6em', textAlign: 'center' }}
      >
        {props.name}
      </p>
      <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
        Clique sobre a célula para saber mais!
      </p>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <ReactSVG
          src={img}
          beforeInjection={svg => {
            svg.classList.add('svg-class-name')
            svg.setAttribute('style', `width: ${width}; margin-top:${margin}`)
          }}
          fallback={() => <span>Error!</span>}
          loading={() => <span>Loading</span>}
          renumerateIRIElements={false}
          onClick={e => {
            let organell = e.target.id
            organell = organell.replace(/[0-9]/g, '')
            let index = -1
            //Searches for organell in JSON file
            for (let i = 0; i < Organells.capacity; i++) {
              if (Organells.organells[i].id === organell) {
                index = i
              }
            }

            if (index !== -1) {
              setOrganell(Organells.organells[index])
              setOpen(true)
            }
          }}
        />
        {openCard && 
          <OrganellCard
            openCard={openCard}
            closeCard={() => setOpen(false)}
            organell={organell}
          />
        }
      </Grid>
    </Typography>
  )
}

CellPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}
