import React from 'react'
import CustomResponsive from '../../../CustomResponsive'

export default function LeftBox(props) {
  return (
    <div>
      <img
        style={{
          height: CustomResponsive('80x', '90px', '120px'),
          width: CustomResponsive('100px', '110px', '160px'),
          marginTop: '15px',
          marginBottom: '15px',
          marginRight: CustomResponsive('100px', '150px', '250px')
        }}
        onLoad={() => props.onLoad()}
        className={props.className}
        id={props.id}
        alt={props.desc}
        src={props.img}
      ></img>
    </div>
  )
}
