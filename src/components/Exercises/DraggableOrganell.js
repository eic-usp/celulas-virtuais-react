import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import ItemTypes from "./ItemTypes";

export default function DraggableOrganell(props) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.ORGANELL, id: props.id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  /*if (isDragging) {
    props.onTouchDrag();
  }*/
  return (
    <div>
      <DragPreviewImage connect={preview} src={props.gif} />
      <div
        ref={drag}
        onDrag={props.onDrag}
        onDragEnd={props.onDragEnd}
        onTouchMove={props.onDrag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {props.children}
      </div>
    </div>
  );
}
