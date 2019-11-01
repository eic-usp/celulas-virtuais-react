import React from "react";
import OrganellDrawer from "./OrganellDrawer";
import { DndProvider } from "react-dnd";
import Ex1svg from "./ex1svg";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/lib/HTML5toTouch";
import { Grid } from "@material-ui/core";
import '../../../App.css'

const organells = [
  "nucleo",
  "membPlasm",
  "retEndLis",
  "retEndRug",
  "mitocondria",
  "vesicula",
  "golgi",
  "peroxissomo",
  "ribossomo",
  "lisossomo",
  "centriolos",
  "citoesqueleto"
];

export default function Ex1(props) {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState("");

  return (
    <div>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1 className='titulo'>{props.completeMsg}</h1>
          <Ex1svg
            organells={organells}
            hits={() => {
              props.hit();
            }}
            setUpdate={() => {
              setOpen(false);
            }}
          />
        </Grid>
        <OrganellDrawer
          open={open}
          organells={organells}
          openDrawer={() => {
            setOpen(true);
          }}
          closeDrawer={() => {
            setOpen(false);
          }}
          handleDrawer={() => {
            setOpen(true);
            setHidden("");
          }}
          hidden={hidden}
          hideDrawer={() => setHidden("hidden")}
          updateHidden={() => {
            setOpen(false);
            setHidden("");
          }}
        ></OrganellDrawer>
      </DndProvider>
    </div>
  );
}
