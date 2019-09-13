import React from 'react'
import { Fab } from '@material-ui/core'
import Share from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
    fab: {
        position:'fixed',
        bottom:theme.spacing(2),
        right:theme.spacing(2)
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function NavBtn() {
    const classes = useStyles();

    return (

        <Fab color='secondary' aria-label='add' className={classes.fab}>
            <Share />
        </Fab>
    )
}