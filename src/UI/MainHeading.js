import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const MainHeading = (props) => {
  const { mainContent, subContent } = props;

  return (
    // color={"#674de5"}
    <React.Fragment>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize={{ base: "24px", md: "28px" }}>
          {mainContent}
        </Heading>
        <Heading
          as="h3"
          fontSize={"16px"}
          mt={"8px"}
          color={"#949bad"}
          textAlign={"center"}
        >
          {subContent}
        </Heading>
      </Box>
    </React.Fragment>
  );
};

export default MainHeading;
