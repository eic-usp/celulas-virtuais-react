import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

export default function Dropable(props) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.ORGANELL,
    canDrop: () => {
        console.log(drop)
      //return drop.id === props.id;
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "10px",
        backgroundColor:'blue'
      }}
    >
        
    </div>
  );
}
