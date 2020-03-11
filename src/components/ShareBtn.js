import React from 'react'
import Share from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsappIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

export default function ShareBtn() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleChange = () => {
    setOpen(prev => !prev)
  }
  const FB = window.FB
  const handleShareLink = (e, operation) => {
    e.preventDefault()
    switch (operation) {
      case 'facebook':    
        FB.ui(
          {
            method: 'share',
            href: 'http://eic.ifsc.usp.br/app/celulasvirtuais/',
            quote:'Acabei de aprender muito sobre células! Venha aprender também!'
          }
        )
        break
      case 'whatsapp':
        window.open(
          'whatsapp://send?text=Acabei de aprender muito sobre células! Venha aprender também! http://eic.ifsc.usp.br/app/celulasvirtuais/',
          '_blank'
        )
        break
      case 'instagram':
        window.open('https://www.instagram.com/eiciencia/?hl=pt-br', '_blank')
        break
      default:
        break
    }
  }

  const actions = [
    {
      icon: <FacebookIcon />,
      name: 'Facebook',
      action: handleShareLink,
      operation: 'facebook'
    },
    {
      icon: <WhatsappIcon />,
      name: 'Whatsapp',
      action: handleShareLink,
      operation: 'whatsapp'
    },
    {
      icon: <InstagramIcon />,
      name: 'Instagram',
      action: handleShareLink,
      operation: 'instagram'
    }
  ]
  return (
    <div>
      <SpeedDial
        FabProps={{ color: 'secondary' }}
        ariaLabel='Compartilhar'
        className={classes.fab}
        hidden={false}
        icon={<Share />}
        onBlur={handleClose}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseLeave={handleClose}
        onMouseEnter={handleOpen}
        onClick={handleChange}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            name={action.name}
            onClick={e => {
              handleShareLink(e, action.operation)
            }}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </div>
  )
}
