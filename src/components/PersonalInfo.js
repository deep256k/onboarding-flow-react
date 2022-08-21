import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import StepperContext from "../Context/StepperContext";
import CustomInput from "../UI/CustomInput";
import MainHeading from "../UI/MainHeading";
import PrimaryButton from "../UI/PrimaryButton";

const PersonalInfo = () => {
  const userNameRef = useRef("");
  const dispalynameRef = useRef("");
  const [isFormInvalid, setisFormInvalid] = useState({
    usernameInvalid: false,
    dispalynameInvalid: false,
  });

  const { updateStepper, userData } = useContext(StepperContext);
  useEffect(() => {
    userNameRef.current.value = userData["fullName"] || "";
    dispalynameRef.current.value = userData["displayName"] || "";
  }, [userData]);

  const stepperHandler = () => {
    if (!userNameRef.current.value && !dispalynameRef.current.value) {
      setisFormInvalid({
        usernameInvalid: true,
        dispalynameInvalid: true,
      });
      return;
    }
    if (!userNameRef.current.value && dispalynameRef.current.value) {
      setisFormInvalid({
        usernameInvalid: true,
        dispalynameInvalid: false,
      });

      return;
    }
    if (!dispalynameRef.current.value && userNameRef.current.value) {
      setisFormInvalid({
        usernameInvalid: false,
        dispalynameInvalid: true,
      });
      return;
    }

    const fieldvalues = {
      fullName: userNameRef.current.value,
      displayName: dispalynameRef.current.value,
    };
    updateStepper(1, fieldvalues);
  };
  return (
    <React.Fragment>
      <MainHeading
        mainContent="Welcome! First things first..."
        subContent="You can always change them later"
      ></MainHeading>
      <Box mt={10} mb={6}>
        <CustomInput
          label="Full Name"
          inputType="text"
          name={"fullName"}
          inputRef={userNameRef}
          isInvalid={isFormInvalid.usernameInvalid}
          placeHolder="Enter your Full Name"
        ></CustomInput>
        {isFormInvalid.usernameInvalid && (
          <Box color={"red"} mt={2}>
            Please enter the Full Name
          </Box>
        )}
        <Box mt={4}>
          <CustomInput
            label="Display Name"
            inputType="text"
            name={"displayName"}
            inputRef={dispalynameRef}
            isInvalid={isFormInvalid.dispalynameInvalid}
            placeHolder="Enter your Display Name"
          ></CustomInput>
          {isFormInvalid.dispalynameInvalid && (
            <Box color={"red"} mt={2}>
              Please enter the Display Name
            </Box>
          )}
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

export default PersonalInfo;
