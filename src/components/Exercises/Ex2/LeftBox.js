import React from "react";



export default function LeftBox(props) {
  
  return (
    <>
      <img
        onClick={props.handleClick}
        style={{
          height: "120px",
          width: "160px",
          marginTop: "15px",
          marginBottom: "15px",
          marginRight:'200px'
        }}
        className={props.className}
        id={props.id}
        alt={props.desc}
        src={props.img}
      ></img>
    </>
  );
}
