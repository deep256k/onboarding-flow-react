import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box display={"flex"} justifyContent={"space-around"} mt="4rem">
      <Box width={{ base: "90%", md: "50%", lg: "33%" }}>{props.children}</Box>
    </Box>
  );
};
export default Layout;
