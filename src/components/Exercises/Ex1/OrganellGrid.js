import React, { useCallback, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import DraggableOrganell from './DraggableOrganell'
import Organells from '../../json/Organells'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, -3, 0, -3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const OrganellGrid = props => {
  const classes = useStyles()
  const [, updateState] = React.useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  const [organellList] = React.useState(props.organells)

  useEffect(() => {
    if (props.update) {
      forceUpdate()
      props.stopUpdate()
    }
    //eslint-disable-next-line
  },[props.update])

  function FormRow(props) {
    const [organellList] = React.useState(props.organellList)
    const row = Organells.organells
      .slice(props.sliceIndex[0], props.sliceIndex[1])
      .map(organell => {
        const inList = organellList.indexOf(organell.id) === -1
        return (
          <Grid item xs={4} key={organell.id}>
            <DraggableOrganell
              id={organell.id}
              name={organell.name}
              onDrag={() => {
                props.showInfo(organell)
              }}
              onMouseOver={() => {
                props.showInfo(organell)
              }}
              disabled={inList}
            >
              <img
                src={organell.gif}
                alt={organell.name}
                draggable={inList}
                style={{
                  height: '5vw',
                  width: '7vw',
                  borderRadius: '5px',
                  marginLeft: '1em',
                  opacity: inList ? 0.5 : 1
                }}
              />
            </DraggableOrganell>
          </Grid>
        )
      })
    return <React.Fragment>{row}</React.Fragment>
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={10} spacing={3}>
          <FormRow
            organellList={organellList}
            showInfo={props.showInfo}
            sliceIndex={[0, 3]}
          />
        </Grid>
        <Grid container item xs={10} spacing={3}>
          <FormRow
            organellList={organellList}
            showInfo={props.showInfo}
            sliceIndex={[3, 6]}
          />
        </Grid>
        <Grid container item xs={10} spacing={3}>
          <FormRow
            organellList={organellList}
            showInfo={props.showInfo}
            sliceIndex={[6, 9]}
          />
        </Grid>
        <Grid container item xs={10} spacing={3}>
          <FormRow
            organellList={organellList}
            showInfo={props.showInfo}
            sliceIndex={[9, 12]}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default OrganellGrid
