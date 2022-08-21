import { Box, Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = (props) => {
  const { background, color, width, onHover, disabled, buttonText } = props;
  const clickHandler = () => {
    props.clickHandler();
  };
  return (
    <React.Fragment>
      <Box>
        <Button
          bg={background}
          color={color}
          width={width}
          _hover={{ bg: { onHover } }}
          disabled={disabled}
          onClick={clickHandler}
        >
          {buttonText}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default PrimaryButton;
