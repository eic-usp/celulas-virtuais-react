import React, {useState} from 'react'
import CustomResponsive from '../../../CustomResponsive'
import Grid from '@material-ui/core/Grid'
export default function LeftBox(props) {
  const [color, setColor] = useState('black')
  return (
    <div>
      <img
        style={{
          height: CustomResponsive('80x', '90px', '120px'),
          width: CustomResponsive('100px', '110px', '160px'),
          marginTop: '15px',
          marginBottom: '15px',
          marginRight: CustomResponsive('100px', '150px', '250px'),
        }}
        onLoad={() => props.onLoad()}
        className={props.className}
        id={props.id}
        alt={props.desc}
        src={props.img}
      ></img>
      {/*<div
        onMouseEnter={()=>setColor('green')}
        onMouseLeave={()=>setColor('black')}
        onTouchStart={()=>setColor('green')}
        onTouchEnd={()=>setColor('black')}
        style={{
          backgroundColor: 'white',
          borderRadius: '50px',
          width: '1.5em',
          height: '1.5em',
          border: `1.5px solid ${color}`
        }}
      ></div>*/}
    </div>
  )
}
