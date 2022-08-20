import { Box, Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Intro from "./intro";
import Work from "./work";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      maxW={{
        base: "100%",
        xl: "1300px",
      }}
      py={{ base: "1.5rem", lg: "5.5rem" }}
    >
      <Flex
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <Intro />
        <Work />
      </Flex>
    </Container>
  );
};

export default PageLayout;
