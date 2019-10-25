import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

export default function Dropable(props) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.ORGANELL,
    drop: item => {
      if (item.id === props.id) {
        props.path.style = { opacity: 0 };
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  //console.log("EU EXISTO")
  return (
    <div id={props.id} style={{width:'100%', width:'100%'}} ref={drop} >
    </div>
  );
}
