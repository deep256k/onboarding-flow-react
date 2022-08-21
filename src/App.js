import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Preference from "./components/Preference";
import Stepper from "./components/Stepper";
import Success from "./components/Success";
import WorkSpace from "./components/WorkSpace";
import StepperContext from "./Context/StepperContext";
import Layout from "./UI/Layout";
import logo from "./Images/cut-short.jpeg";

function App() {
  const stepperCtx = useContext(StepperContext);

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <WorkSpace></WorkSpace>;
      case 2:
        return <Preference></Preference>;
      case 3:
        return <Success></Success>;
      default:
    }
  };
  return (
    <React.Fragment>
      <Layout>
        <Box display={"flex"} justifyContent="space-around">
          <Box mb={"3rem"} display={"flex"} alignItems={"center"}>
            <Box>
              <Image boxSize="30px" src={logo} alt="logo"></Image>
            </Box>
            <Heading>Eden</Heading>
          </Box>
        </Box>
        <Stepper
          steps={stepperCtx.stepperState}
          currentStep={stepperCtx.currentStep}
        ></Stepper>
        {displayStep(stepperCtx.currentStep)}
      </Layout>
    </React.Fragment>
  );
}

export default App;
