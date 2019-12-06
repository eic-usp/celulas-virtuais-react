import React from 'react'
import { Link, Router } from 'react-router-dom'
import Share from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
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

  const handleShareLink = (e, operation) => {
    e.preventDefault()
    switch (operation) {
      case 'facebook':
        window.open(
          'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse',
          '_blank'
        )
        /*FB.ui(
          {
            method: 'share',
            href: 'http://eic.ifsc.usp.br/app/celulasvirtuais/'
          },
          // callback
          function(response) {
            if (response && !response.error_message) {
              alert('Posting completed.')
            } else {
              alert('Error while posting.')
            }
          }
        )*/
        break
      case 'twitter':
        window.open(
          'https://twitter.com/intent/tweet?text=Acabei%20de%20aprender%20muito%20sobre%20células!%20Venha%20aprender%20também!&url=http://eic.ifsc.usp.br/app/celulasvirtuais/',
          '_blank'
        )
        break
      case 'instagram':
        window.open('https://www.instagram.com/eiciencia/?hl=pt-br', '_blank')
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
      icon: <TwitterIcon />,
      name: 'Twitter',
      action: handleShareLink,
      operation: 'twitter'
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
        ButtonProps={{ color: 'secondary' }}
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
