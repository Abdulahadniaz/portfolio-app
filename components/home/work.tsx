import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Work = ({ children }: PropsWithChildren) => {
  return (
    <Box
      w={{
        base: "100%",
        lg: "50%",
      }}
      bg="red.700"
    >
      Abdul Ahad Niaz
    </Box>
  );
};

export default Work;
