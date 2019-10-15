import React from "react";
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import Organells from "../json/Organells";

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

  console.log(props.organells)
  let mapOrganells = []
  
  Organells.organells.forEach(element => {
      if(props.organells.indexOf(element.id)!==-1){
          mapOrganells.push(
              <ListItem button key={element.id}>
                  <ListItemText primary={element.name}/>
              </ListItem>
          )
      }
  });

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>{mapOrganells}</List>
      </SwipeableDrawer>
      <Button onClick={toggleDrawer(true)}>Organelas</Button>
    </div>
  );
}
