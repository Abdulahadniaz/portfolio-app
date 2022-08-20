import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Work = ({ children }: PropsWithChildren) => {
  return (
    <Box
      // mt="2300px"
      pos="relative"
      left={{
        base: 0,
        lg: "50%",
      }}
      overflow-y={{
        base: "auto",
        lg: "hidden",
      }}
      w={{
        base: "100%",
        lg: "50%",
      }}
      bg="red.700"
      h={{
        base: "auto",
        lg: "1000vh",
      }}
    >
      <Box
        pos={{
          base: "relative",
          lg: "absolute",
        }}
      ></Box>
      Abdul Ahad Niaz
    </Box>
  );
};

export default Work;
