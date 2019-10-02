import React from 'react'
import '../App.css'
import { Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import CustomResponsive from '../CustomResponsive'
import OrganellCard from './OrganellCard'

export default function CellPanel(props) {

    const { value, index, ...other } = props
    const [openCard, setOpen] = React.useState(false)
    const [organell, setOrganell] = React.useState('')


    return (
      <Typography
        style={{ backgroundColor: "transparent" }}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <p className="titulo">{props.name}</p>
          <ReactSVG
            src={props.img}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
            beforeInjection={svg => {
              svg.classList.add("svg-class-name");
              svg.setAttribute(
                "style",
                `width: ${CustomResponsive("90vw", "70vw", "40vw")}`
              );
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className="wrapper-class-name"
            onClick={e => {
              let organell = e.target.id;
              organell = organell.replace(/[0-9]/g, "");
              let index = -1;
              //Searches for organell in JSON file
              for (let i = 0; i < props.json.capacity; i++) {
                if (props.json.organells[i].id === organell) {
                  index = i;
                }
              }

              if (index !== -1) {
                setOrganell(props.json.organells[index]);
                setOpen(true);
              }
            }}
          />
          {openCard && (
            <OrganellCard
              openCard={openCard}
              closeCard={() => setOpen(false)}
              organell={organell}
            />
          )}
        </Grid>
      </Typography>
    );
}

CellPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};