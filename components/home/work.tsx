import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import ProjectCard from "./projectCard";
import Skills from "./skills";
import WorkExperience from "./workExperience";

const Work = ({ children }: PropsWithChildren) => {
  return (
    <Box
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
      >
        <ProjectCard />
        <WorkExperience />
        <Skills />
      </Box>
    </Box>
  );
};

export default Work;
