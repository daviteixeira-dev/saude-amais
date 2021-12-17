/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Material UI UseTheme */
import { useTheme } from "@mui/material/styles";

/* Imports of UI material components */
import { Box, Button, MobileStepper } from "@mui/material";

/* Imports of Material UI Icons */
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

/* Imports of React Swipeable Views */
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

/* Image imports */
import slide01 from "../../images/apresentationBanner.jpg";
import slide02 from "../../images/youngWomanAndInstructor.jpg";
import slide03 from "../../images/pregnantWomanAndInstructor.jpg";

const AutoPlay = autoPlay(SwipeableViews);

function CarouselOfImages() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }} component="section">
      <AutoPlay
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={5000}
        enableMouseEvents
      >
        {/* Imagem 01 */}
        <Box display="flex" flexDirection="column" justifyContent="end">
          <Box
            component="img"
            src={slide01}
            alt="Banner de apresentação"
            width="100%"
          />
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            mb={1}
            position="absolute"
            zIndex={1}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Agendar Aula</Button>
            </Link>
          </Box>
        </Box>

        {/* Imagem 02 */}
        <Box display="flex" flexDirection="column" justifyContent="end">
          <Box
            component="img"
            src={slide02}
            alt="Mulher jovem e instrutora"
            width="100%"
          />
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            mb={1}
            position="absolute"
            zIndex={1}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Agendar Aula</Button>
            </Link>
          </Box>
        </Box>

        {/* Imagem 03 */}
        <Box display="flex" flexDirection="column" justifyContent="end">
          <Box
            component="img"
            src={slide03}
            alt="Mulher gravida e instrutora"
            width="100%"
          />
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            mb={1}
            position="absolute"
            zIndex={1}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Agendar Aula</Button>
            </Link>
          </Box>
        </Box>
      </AutoPlay>

      <MobileStepper
        steps={maxSteps}
        position="static"
        top={-50}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default CarouselOfImages;
