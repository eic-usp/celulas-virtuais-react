import React from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";

export default function DraggableOrganell(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ORGANELL, id: props.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div>
      <div
        ref={drag}
        onDrag={props.onDrag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {props.children}
      </div>
    </div>
  );
}
