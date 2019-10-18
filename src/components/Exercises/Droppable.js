import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

export default function Dropable(props) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.ORGANELL,
    drop: item => {
      console.log(item);
      if (item.id === props.id) {
        console.log("DEU");
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
    <div style={{width:'100px', height:'100px', position:'absolute', top:'150px', backgroundColor:'blue'}}>
      <div ref={drop}></div>
    </div>
  );
}
