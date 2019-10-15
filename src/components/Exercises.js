import React from "react";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import {
  StepLabel,
  Typography,
  Button,
  Grid
} from "@material-ui/core";
import Ex1 from "./Exercises/Ex1";

function getSteps() {
  let steps = [];
  for (let i = 1; i <= 5; i++) {
    steps.push(`Exercício ${i}`);
  }
  return steps;
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Ex1 />;
    case 1:
      return "2";
    case 2:
      return "3";
    case 3:
      return "4";
    case 4:
      return "5";

    default:
      return "Unknown step";
  }
}

export default function Exercises() {
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  const [, setCompleted] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setCompleted(prevCompleted => prevCompleted + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(0);
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        style={{ backgroundColor: "transparent" }}
      >
        {steps.map((label) => {
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
            <Grid item>
              <Typography>{getStepContent(activeStep)}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
              </Button>
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
}
