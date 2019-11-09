import React from "react";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import { StepLabel, Typography, Button, Grid } from "@material-ui/core";
import Ex1 from "./Exercises/Ex1/Ex1";
import Ex2 from "./Exercises/Ex2/Ex2";
import { jsPlumb } from "jsplumb";
import MultipleChoice from "./Exercises/Multiple Choice/MutipleChoice";

function getSteps() {
  let steps = [];
  for (let i = 1; i <= 5; i++) {
    steps.push(`Exercício ${i}`);
  }
  return steps;
}

export default function Exercises() {
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const [hits, setHits] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 1 && completed) {
      jsPlumb.deleteEveryEndpoint();
      jsPlumb.deleteEveryConnection();
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setCompleted(prevCompleted => prevCompleted + 1);
    setCompleted(false);
  };

  const updateHit = () => {
    setHits(hits + 1);
    if (hits === 11) {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(0);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <Ex1 hit={updateHit} />;
      case 1:
        return (
          <Ex2
            jsPlumb={jsPlumb}
            complete={() => {
              setCompleted(true);
            }}
          />
        );
      case 2:
        return (
          <MultipleChoice
            question="Sobre o ribossomo, qual das alternativas abaixo é incorreta?"
            A="O ribossomo é composto de RNA e proteínas"
            B="O ribossomo possui duas subunidades"
            C="O ribossomo está relacionado com a síntese de proteínas"
            D="O ribossomo está associado à modificação de proteínas"
            E="Vários ribossomos podem ser encontrados associados com uma molécula de RNA mensageiro. Esse complexo é conhecido como poliribossomos"
            answer="d"
            complete={() => {
              setCompleted(true);
            }}
            false={() => {
              setCompleted(false);
            }}
          />
        );
      case 3:
        return "4";
      case 4:
        return (
          <MultipleChoice
            question="Em que organela ocorre a duplicação do DNA?"
            A="Núcleo"
            B="Complexo de Golgi"
            C="Retículo endoplasmático Rugoso (ou Granular)"
            D="Retículo endoplasmático Liso"
            E="Ribossomo"
            answer="a"
            complete={() => {
              setCompleted(true);
            }}
            false={() => {
              setCompleted(false);
            }}
          />
        );
      default:
        return "Unknown step";
    }
  };

  //ENTER PULA EXERCÍCIO
  document.addEventListener("keypress", e => {
    if (e.code === "Enter") {
      setCompleted(true);
    }
  });
  return (
    <div>
      <Stepper
        activeStep={activeStep}
        style={{ backgroundColor: "transparent" }}
      >
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" justify="center" alignItems="center">
        {activeStep === steps.length ? (
          <Grid item>
            <Typography>
              Parabéns, você completou todos os exercícios!
            </Typography>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Jogar Novamente
            </Button>
          </Grid>
        ) : (
          <div>
            {/*<h1 className="titulo">{completed && "Parabéns!"}</h1>*/}
            <Grid item>
              <div>{getStepContent(activeStep)}</div>
            </Grid>
            <Grid item>
              <Button
                disabled={!completed}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
              </Button>
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
}
