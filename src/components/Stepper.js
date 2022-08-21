import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import StepperContext from "../Context/StepperContext";

const Stepper = ({ steps, currentStep }) => {
  const stepperCtx = useContext(StepperContext);
  const stepperHandler = (index) => {
    if (currentStep < index || currentStep === steps.length - 1) {
      return;
    }
    stepperCtx.updateStepper(index);
  };
  const stepDisplay = steps.map((step, index) => {
    return (
      <Box
        key={index}
        display={"flex"}
        alignItems={"center"}
        w={index < steps.length - 1 ? "100%" : "unset"}
        cursor={
          currentStep >= index && currentStep !== steps.length - 1
            ? "pointer"
            : ""
        }
        onClick={() => stepperHandler(index)}
      >
        <Box
          border={"1px"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          w={"3rem"}
          h={"3rem"}
          borderRadius={"6rem"}
          bg={currentStep >= index ? "#674de5" : "white"}
          color={currentStep >= index ? "white" : "black"}
        >
          {index + 1}
        </Box>
        {index < steps.length - 1 && (
          <Box
            border={"1px"}
            borderColor={currentStep >= index ? "#674de5" : "lightgrey"}
            flexGrow={"1"}
          ></Box>
        )}
      </Box>
    );
  });
  return (
    <React.Fragment>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"2rem"}
        >
          {stepDisplay}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Stepper;
