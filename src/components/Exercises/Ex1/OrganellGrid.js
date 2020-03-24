import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:theme.spacing(0,-3,0,-3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const OrganellGrid = (props)=>{
    const classes = useStyles()
    
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={3}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </React.Fragment>
      )
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    )
}

export default OrganellGrid