import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PreferenceCard = (props) => {
  const { isActive, imagePath, mainText, subText } = props;
  const changehandler = () => {
    props.preferenceHandler();
  };

  return (
    <React.Fragment>
      <Box
        border={"2px solid"}
        p={4}
        cursor="pointer"
        onClick={changehandler}
        borderColor={isActive ? "#674de5" : "lightgray"}
        height={"100%"}
      >
        <Box mb={4}>
          <Image boxSize="30px" src={imagePath} alt="Onboarding-done3" />
        </Box>
        <Box>
          <Text mb={2} fontWeight={"bold"}>
            {mainText}
          </Text>
          <Text>{subText}</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PreferenceCard;
