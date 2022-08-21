import React, { useState } from "react";

let IntialStepperState = [
  {
    step: 0,
    selected: true,
  },
  {
    step: 1,
    selected: false,
  },
  {
    step: 2,
    selected: false,
  },
  {
    step: 3,
    selected: false,
  },
];
const StepperContext = React.createContext({
  stepperState: IntialStepperState,
  currentStep: 0,
  updateStepper: () => {},
  userData: {},
});

export const StepperContextprovider = (props) => {
  const [stepperState, setStepperState] = useState(IntialStepperState);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});

  const updateStepper = (currentStep, fieldvalues) => {
    const updatedState = stepperState.map((state) => {
      state.step <= currentStep
        ? (state.selected = true)
        : (state.selected = false);
      return state;
    });
    setStepperState(updatedState);
    setCurrentStep(currentStep);
    setUserData({ ...userData, ...fieldvalues });
  };

  const contextvalue = {
    stepperState: stepperState,
    currentStep: currentStep,
    updateStepper: updateStepper,
    userData: userData,
  };
  return (
    <StepperContext.Provider value={contextvalue}>
      {props.children}
    </StepperContext.Provider>
  );
};

export default StepperContext;
