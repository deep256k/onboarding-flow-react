import { Box, Image } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../UI/MainHeading";
import successImage from "../Images/done.jpeg";

import PrimaryButton from "../UI/PrimaryButton";

const Success = () => {
  return (
    <React.Fragment>
      <Box mt={"4rem"} mb={"2rem"}>
        <Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Image boxSize="100px" src={successImage} alt="Onboarding-done3" />
          </Box>
        </Box>
        <MainHeading
          mainContent="Congratultions Eren!"
          subContent="You have completed the onboarding. you can start using the Eden."
        ></MainHeading>
      </Box>
      <PrimaryButton
        color="white"
        background="#674de5"
        width="100%"
        onHover="#674de5"
        buttonText={"Launch Eden"}
      ></PrimaryButton>
    </React.Fragment>
  );
};

export default Success;
