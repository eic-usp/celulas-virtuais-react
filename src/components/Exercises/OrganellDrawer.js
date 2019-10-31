import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Drawer
} from "@material-ui/core";
import Organells from "../json/Organells";
import DraggableOrganell from "./DraggableOrganell";

export default function OrganellDrawer(props) {
  const [open, setOpen] = React.useState(false);
  
  
  /*const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    open ? setHidden("") : setHidden("hidden");
    setOpen(open);
  };*/

  let mapOrganells = [];

  Organells.organells.forEach(element => {
    if (props.organells.indexOf(element.id) !== -1) {
      mapOrganells.push(
        <DraggableOrganell
          gif={element.gif}
          key={element.id}
          id={element.id}
          //onDrag={props.closeDrawer}
          onDrag={props.hideDrawer}
        >
          <ListItem button key={element.id}>
            <img
              alt={element.id}
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
      <Drawer
        anchor="right"
        open={props.open}
        onClose={props.closeDrawer}
        onOpen={props.openDrawer}
        style={{ visibility: props.hidden }}
      >
        <List>{mapOrganells}</List>
      </Drawer>
      <Button onClick={props.handleDrawer}>Organelas</Button>
    </div>
  );
}
