import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

export default function DraggableOrganell(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ORGANELL, id: props.id, name: props.name },
    canDrag: props.disabled !== undefined && props.disabled === false,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })
  return (
    <div
      draggable={{
        start: () => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        },
        stop: () => {
          document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        }
      }}
      ref={drag}
      onDrag={props.onDrag}
      onDragEnd={props.onDragEnd}
      onTouchMove={props.onDrag}
      onClick={props.onDrag}
      onMouseOver={props.onMouseOver}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {props.children}
    </div>
  )
}
