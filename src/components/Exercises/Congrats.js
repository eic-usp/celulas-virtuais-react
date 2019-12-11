import React, { useState, useEffect } from 'react'
import '../../App.css'
import Confetti from 'react-dom-confetti'

export default function Congrats() {
  const [fire, setFire] = useState(false)

  useEffect(() => {
    setFire(true)
  }, [])

  return (
    <div>
      <div style={{ marginBottom: '40vh' }} />
      <div style={{ position: 'absolute', left: '0', bottom: '0' }}>
        <Confetti
          active={fire}
          config={{
            angle: 45,
            spread: 45,
            startVelocity: 70,
            elementCount: 70,
            dragFriction: 0.1,
            duration: 3000,
            stagger: 0,
            width: '10px',
            height: '15px',
            colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
          }}
        />
        
      </div>
      <div style={{ position: 'absolute', right: '0', bottom: '0' }}>
        <Confetti
          active={fire}
          config={{
            angle: 135,
            spread: 45,
            startVelocity: 70,
            elementCount: 70,
            dragFriction: 0.1,
            duration: 3000,
            stagger: 0,
            width: '10px',
            height: '15px',
            colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
          }}
        />
      </div>
          
      <div style={{ position: 'absolute', right: '0', top: '0' }}>
        <Confetti
          active={fire}
          config={{
            angle: 205,
            spread: 45,
            startVelocity: 70,
            elementCount: 70,
            dragFriction: 0.1,
            duration: 3000,
            stagger: 0,
            width: '10px',
            height: '15px',
            colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
          }}
        />
      </div>
      <div style={{ position: 'absolute', left: '0', top: '0' }}>
        <Confetti
          active={fire}
          config={{
            angle: 335,
            spread: 45,
            startVelocity: 70,
            elementCount: 70,
            dragFriction: 0.1,
            duration: 3000,
            stagger: 0,
            width: '10px',
            height: '15px',
            colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
          }}
        />
      </div>


      <p
        className='titulo'
        style={{
          textAlign: 'center',
          top: '50%',
          marginBottom: '30vh',
          fontSize: '50px',
          marginLeft:'0'
        }}
      >
        PARABÉNS!
      </p>
    </div>
  )
}
