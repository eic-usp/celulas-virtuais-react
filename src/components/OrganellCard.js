import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";
import "../App.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CustomResponsive from "../CustomResponsive";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: CustomResponsive("90vw", "80vw", "40vw"),
    top: CustomResponsive("20%", "10%", "0")
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function OrganellCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.openCard);
  const audio = new Audio(props.organell.mp3);

  const handleClose = () => {
	audio.pause()
    setOpen(false);
	props.closeCard();
	
  };

  let iconAudio = audio.played ? <PlayArrowIcon /> : <PauseIcon />

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
                aria-label="Fechar"
                onClick={() => {
                  audio.pause();
                  props.closeCard();
                }}
              >
                <CloseIcon />
              </IconButton>
            }
            avatar={
              <IconButton
                aria-label="Ouvir Descrição"
                onClick={() => {
				  audio.paused ? audio.play() : audio.pause()
				  
                }}
              >
                {iconAudio}
              </IconButton>
            }
            title={<p className="titulo">{props.organell.name}</p>}
          ></CardHeader>
          <CardContent variant="body2" color="textSecondary">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                {props.organell.gif==='null'?  "" : <img src={props.organell.gif} alt={props.organell.name}></img>}
              </Grid>
              <br />
              <Grid
                item
                style={{
                  overflowY: "scroll",
                  maxHeight: CustomResponsive("20vh", "15vh", "10vh")
                }}
              >
                {props.organell.desc}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
}
