import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Intro from "./intro";
import Work from "./work";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Intro />
      <Work />
    </Flex>
  );
};

export default PageLayout;
