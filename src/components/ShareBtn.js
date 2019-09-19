import React from 'react'
import Share from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function ShareBtn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleChange = ()=>{
        setOpen(prev => !prev)
    }

    const actions =[
        {icon: <FacebookIcon />, name:'Facebook'},
        {icon: <TwitterIcon />, name:'Twitter'},
        {icon: <InstagramIcon />, name:'Instagram'},
    ]
    return (
        <div>
            <SpeedDial
                ButtonProps={{color:'secondary'}}
                ariaLabel="Compartilhar"
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
                {actions.map(action =>(
                    <SpeedDialAction 
                        key ={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={()=>console.log(action.name)}
                    />
                ))}
            </SpeedDial>
        </div>
       
    )
}