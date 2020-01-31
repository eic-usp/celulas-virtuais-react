import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from 'react-spring'
import '../App.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Grid,
  CircularProgress,
  Button
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import CustomResponsive from '../CustomResponsive'
import {
  MTLModel,
  GLTFModel,
  AmbientLight,
  DirectionLight
} from 'react-3d-viewer'
import ModelViewer from 'react-model-viewer'
//handles spring fade animation
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    }
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

//Component renders the selected organell card with 3d model and audio and text description
export default function OrganellCard(props) {
  const [open, setOpen] = React.useState(props.openCard)
  const [audio] = React.useState(new Audio(props.organell.mp3))
  const [isLoading, setLoading] = React.useState(true)
  const [paused, setPaused] = React.useState(true)
  const [hide, setHide] = React.useState(true)

  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: CustomResponsive('90vw', '80vw', '50vw'),
      paddingTop: '50px',
      top: CustomResponsive('20%', '10%', '0')
    }
  }))
  const classes = useStyles()

  //Stops audio to prevent audio playback after card is closed
  const handleClose = () => {
    audio.pause()
    setOpen(false)
    props.closeCard()
  }

  return (
    <Modal
      aria-labelledby={props.name}
      aria-describedby={props.desc}
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Card className={classes.paper}>
          <CardHeader
            action={
              <IconButton
                aria-label='Fechar'
                onClick={() => {
                  audio.pause()
                  props.closeCard()
                }}
              >
                <CloseIcon />
              </IconButton>
            }
            avatar={
              <IconButton
                aria-label='Ouvir Descrição'
                onClick={() => {
                  paused ? audio.play() : audio.pause()
                  setPaused(!paused)
                }}
              >
                {paused ? <PlayArrowIcon /> : <PauseIcon />}
              </IconButton>
            }
            title={
              <p
                style={{ fontSize: CustomResponsive('24px', '28px', '32px') }}
                className='tituloOrganela'
              >
                {props.organell.name}
              </p>
            }
          ></CardHeader>
          <CardContent variant='body2' color='textSecondary'>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item>{(isLoading && props.organell.id!=='membPlasm') && <CircularProgress />}</Grid>
              <Grid item>
                {props.organell.id === 'membPlasm' ? (
                  <div
                    style={{
                      width: CustomResponsive('275px', '400px', '450px'),
                      backgroundColor:'#e6e6e6'
                    }}
                  >
                    <ModelViewer
                      type='gtlf'
                      src={require('./Hip Hop Dancing.glb')}
                      onLoad={() => setLoading(false)}
                    />
                  </div>
                ) : (
                  <MTLModel
                    style={{
                      width: CustomResponsive('85vw', '75vw', '45vw'),
                      marginLeft: '-15px',
                      hidden: true
                    }}
                    background='#E6E6E6'
                    height={CustomResponsive('300', '400', '400')}
                    width={CustomResponsive('275', '400', '400')}
                    enableKeys={false}
                    onLoad={() => {
                      setLoading(false)
                    }}
                    src={`./src/lib/model/${props.organell.obj}.obj`}
                    mtl={`./src/lib/model/${props.organell.obj}.mtl`}
                  />
                )}
              </Grid>
              <br />
              <br />
              <Button
                style={{ marginBottom: '15px' }}
                color='primary'
                variant='contained'
                onClick={() => {
                  setHide(!hide)
                }}
              >
                {hide ? 'Mostrar Descrição' : 'Esconder Descrição'}
              </Button>
              <Grid
                item
                style={{
                  overflowY: 'scroll',
                  maxHeight: CustomResponsive('20vh', '15vh', '10vh')
                }}
                hidden={hide}
              >
                {props.organell.desc}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  )
}
/*<div
                    style={{
                      position: 'inherit',
                      top: '50%',
                      left: '50%',
                      marginTop: '-50px',
                      marginLeft: '-50px',
                      width: '500px',
                      height: '375px',
                      overflowY: 'hidden'
                    }}
                  >
                    <ReactThreeFbxViewer
                      url={fbxUrl}
                      cameraPosition={cameraPosition}
                      //backgroundColor='#C6C6C6'
                      onError={onError}
                    />
                  </div>*/
