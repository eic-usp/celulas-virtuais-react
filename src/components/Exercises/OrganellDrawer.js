import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import Organells from "../json/Organells";
import DraggableOrganell from './DraggableOrganell'

export default function OrganellDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  let mapOrganells = [];

  Organells.organells.forEach(element => {
    if (props.organells.indexOf(element.id) !== -1) {
      mapOrganells.push(
        <DraggableOrganell key={element.id} id={element.id} onDrag={toggleDrawer(false)}>
          <ListItem button key={element.id}>
            <img
              src={element.gif}
              key={element.id}
              style={{ width: "50px", height: "40px" }}
            ></img>
            <ListItemText primary={element.name} />
          </ListItem>
        </DraggableOrganell>
      );
    }
  });

  return (
    <div>
      <SwipeableDrawer
        variant='temporary'
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>{mapOrganells}</List>
      </SwipeableDrawer>
      <Button onClick={toggleDrawer(!open)}>Organelas</Button>
    </div>
  );
}
