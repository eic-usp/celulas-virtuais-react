import React from 'react'
import Step from '@material-ui/core/Step'
import Stepper from '@material-ui/core/Stepper'
import { StepLabel, Button, Grid } from '@material-ui/core'
import Ex1 from './Exercises/Ex1/Ex1'
import Connect from './Exercises/Connect/Connect'
import MultipleChoice from './Exercises/Multiple Choice/MutipleChoice'
import CustomResponsive from '../CustomResponsive'
import Confetti from 'react-dom-confetti'
import Congrats from './Exercises/Congrats'
import Ex1Desktop from './Exercises/Ex1/Ex1Desktop'

function getSteps() {
  let steps = []
  for (let i = 1; i <= 5; i++) {
    steps.push(`Exercício ${i}`)
  }
  return steps
}

/*
  Exercises handler: handles completion and active current exercise
*/
export default function Exercises() {
  const steps = getSteps()
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState(false)

  const handleNext = () => {
    if (activeStep !== steps.length) {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
      setCompleted(prevCompleted => prevCompleted + 1)
      setCompleted(false)
    } else {
      handleReset()
    }
  }

 

  const handleReset = () => {
    setActiveStep(0)
    setCompleted(0)
  }

  //Switches exercises according to current step
  const getStepContent = step => {
    const ex1 = CustomResponsive(
      <Ex1 complete={() => setCompleted(true)} />,
      <Ex1 complete={() => setCompleted(true)} />,
      <Ex1Desktop complete={() => setCompleted(true)} />
    )
    switch (step) {
      case 0:
        return ex1
      case 1:
        return (
          <Connect
            complete={() => {
              setCompleted(true)
            }}
            organellsLeft={[
              'Núcleo',
              'Mitocôndria',
              'Lisossomo',
              'Retículo Endoplasmático Rugoso'
            ]}
            descriptionRight={[
              {
                desc: 'Modificação de proteínas',
                answer: 'Retículo Endoplasmático Rugoso'
              },
              {
                desc: 'Duplicação do DNA e produção de RNA',
                answer: 'Núcleo'
              },
              { desc: 'Produção de energia', answer: 'Mitocôndria' },
              { desc: 'Digestão intracelular', answer: 'Lisossomo' }
            ]}
            answer={{
              A: 'Retículo Endoplasmático Rugoso',
              B: 'Núcleo',
              C: 'Mitocôndria',
              D: 'Lisossomo'
            }}
          />
        )
      case 2:
        return (
          <MultipleChoice
            question='Sobre o ribossomo, qual das alternativas abaixo é incorreta?'
            A='O ribossomo é composto de RNA e proteínas'
            B='O ribossomo possui duas subunidades'
            C='O ribossomo está relacionado com a síntese de proteínas'
            D='O ribossomo está associado à modificação de proteínas'
            E='Vários ribossomos podem ser encontrados associados com uma molécula de RNA mensageiro. Esse complexo é conhecido como poliribossomos'
            answer='d'
            complete={() => {
              setCompleted(true)
            }}
            false={() => {
              setCompleted(false)
            }}
          />
        )
      case 3:
        return (
          <Connect
            complete={() => {
              setCompleted(true)
            }}
            organellsLeft={[
              'Ribossomo',
              'Centríolo',
              'Complexo de Golgi',
              'Retículo Endoplasmático Liso'
            ]}
            descriptionRight={[
              {
                desc: 'Orientam as fibras do fuso durante a mitose',
                answer: 'Centríolo'
              },
              {
                desc: 'Traduz RNA em proteínas',
                answer: 'Ribossomo'
              },
              {
                desc: '	Possui relação com a síntese de polissacarídeos',
                answer: 'Complexo de Golgi'
              },
              {
                desc: 'Possui relação com a síntese de lipídeos e esteróides',
                answer: 'Retículo Endoplasmático Liso'
              }
            ]}
            answer={{
              A: 'Centríolo',
              B: 'Ribossomo',
              C: 'Complexo de Golgi',
              D: 'Retículo Endoplasmático Liso'
            }}
          />
        )
      case 4:
        return (
          <MultipleChoice
            question='Em que organela ocorre a duplicação do DNA?'
            A='Núcleo'
            B='Complexo de Golgi'
            C='Retículo endoplasmático Rugoso (ou Granular)'
            D='Retículo endoplasmático Liso'
            E='Ribossomo'
            answer='a'
            complete={() => {
              setCompleted(true)
            }}
            false={() => {
              setCompleted(false)
            }}
          />
        )
      default:
        return 'Unknown step'
    }
  }

  //ENTER PULA EXERCÍCIO
  //--------------DEV ONLY-----------------------
  document.addEventListener('keypress', e => {
    if (e.code === 'Enter') {
      setCompleted(true)
    }
  })
  /*document.addEventListener('touchstart', e=>{
    setActiveStep(5)
  })*/
  //-----------------------------------------------

  return (
    <div>
      <Grid container direction='column' justify='center' alignItems='center'>
        {//Renders current exercise or congratulations message according to current step
        activeStep === steps.length ? (
          <Grid item>
            <Congrats />
          </Grid>
        ) : (
          <div>
            <Grid item>
              <div>{getStepContent(activeStep)}</div>
            </Grid>
          </div>
        )}
      </Grid>
      <Stepper
        activeStep={activeStep}
        style={{
          backgroundColor: 'transparent',
          overflowX: CustomResponsive('scroll', 'scroll', 'hidden'),
          bottom: '0.01vh'
        }}
      >
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep !== steps.length ? (
        <Grid container direction='column' justify='center' alignItems='center'>
          {/*completed ? <p>Parabéns!</p> : <></>*/}
          <Button
            disabled={!completed}
            variant='contained'
            color='primary'
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
            <Confetti
              active={completed}
              config={{
                angle: 90,
                spread: 45,
                startVelocity: 60,
                elementCount: 70,
                dragFriction: 0.1,
                duration: 3000,
                stagger: 0,
                width: '10px',
                height: '15px',
                colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
              }}
            />
          </Button>
        </Grid>
      ) : (
        <Grid container direction='column' justify='center' alignItems='center'>
          <Button variant='contained' color='primary' onClick={handleReset}>
            Jogar Novamente
          </Button>
        </Grid>
      )}
    </div>
  )
}
