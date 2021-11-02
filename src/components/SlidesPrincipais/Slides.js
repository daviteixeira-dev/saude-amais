import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Grid, MobileStepper } from "@mui/material/";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import slide01 from "../../images/slide01.jpg";
import slide02 from "../../images/slide02.jpg";
import slide03 from "../../images/slide03.jpg";

const AutoPlay = autoPlay(SwipeableViews);

function Slide() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box component="section">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {/* AutoPlay das Imagens */}
          <AutoPlay
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* Imagem 01 */}
            <Box
              component="img"
              src={slide01}
              alt="Foto de Burst no Pexels"
              width="100%"
            />
            {/* Imagem 02 */}
            <Box
              component="img"
              src={slide02}
              alt="Foto de Andrea Piacquadio no Pexels"
              width="100%"
            />
            {/* Imagem 03 */}
            <Box
              component="img"
              src={slide03}
              alt="Foto de Anastasia Shuraeva no Pexels"
              width="100%"
            />
          </AutoPlay>
          {/* End AutoPlay das Imagens */}

          {/* Botões */}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Próximo
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Anterior
              </Button>
            }
          />
          {/* End Botões */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Slide;
