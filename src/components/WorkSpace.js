import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import CustomInput from "../UI/CustomInput";
import MainHeading from "../UI/MainHeading";
import PrimaryButton from "../UI/PrimaryButton";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import StepperContext from "../Context/StepperContext";

const WorkSpace = () => {
  const { updateStepper, userData } = useContext(StepperContext);
  const workspaceNameRef = useRef("");
  const workspaceUrlRef = useRef("");
  const [isFormInvalid, setisFormInvalid] = useState(false);

  const stepperHandler = () => {
    if (!workspaceNameRef.current.value) {
      setisFormInvalid(true);
      return;
    }
    const fieldvalues = {
      workspaceName: workspaceNameRef.current.value,
      workspaceUrl: workspaceUrlRef.current.value,
    };
    updateStepper(2, fieldvalues);
  };

  useEffect(() => {
    workspaceNameRef.current.value = userData["workspaceName"] || "";
    workspaceUrlRef.current.value = userData["workspaceUrl"] || "";
  }, [userData]);

  return (
    <React.Fragment>
      <MainHeading
        mainContent="let's set up a home for all your work"
        subContent="You can always create another workspace later"
      ></MainHeading>
      <Box mt={10} mb={6}>
        <CustomInput
          label="WorkSpace Name"
          inputType="text"
          inputRef={workspaceNameRef}
          isInvalid={isFormInvalid}
          placeHolder="Enter your workspace name"
        ></CustomInput>
        {isFormInvalid && (
          <Box color={"red"} mt={2}>
            Please enter the WorkSpace Name
          </Box>
        )}
        <Box mt={4}>
          <FormControl>
            <FormLabel>WorkSpace URL (Optional)</FormLabel>
            <InputGroup>
              <InputLeftAddon children="www.eden.com/" />
              <Input type="tel" placeholder="Example" ref={workspaceUrlRef} />
            </InputGroup>
          </FormControl>
        </Box>
      </Box>
      <PrimaryButton
        color="white"
        background="#674de5"
        width="100%"
        onHover="#674de5"
        clickHandler={stepperHandler}
        buttonText={"Create Workspace"}
      ></PrimaryButton>
    </React.Fragment>
  );
};

export default WorkSpace;
