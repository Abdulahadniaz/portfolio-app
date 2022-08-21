import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Link as ChakraLink,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { DiJavascript1 } from "react-icons/Di";

const Skills = ({ children }: PropsWithChildren) => {
  return (
    <Box
      id="workExperience"
      className="chars_container"
      mt="100px"
      display="flex"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      justifyContent={{
        base: "center",
        lg: "left",
      }}
      flexWrap="wrap"
      gap={1}
    >
      <Heading
        my="10px"
        letterSpacing="3px"
        size="base"
        display={{
          base: "block",
          lg: "none",
        }}
        textAlign="center"
      >
        Work Experience
      </Heading>

      {[1, 2, 3, 4].map((i, key) => {
        return (
          <div key={key} className="skill-card">
            <HStack
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap={8}
              py="20px"
            >
              <Box
                w="120px"
                h="120px"
                borderRadius="50%"
                bg="#202022"
                display="flex"
                justifyContent="center"
                alignItems="center"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.4s",
                  cursor: "pointer",
                }}
              >
                <Icon as={DiJavascript1} color="#ffffff" w="24px" h="24px" />
              </Box>
              <VStack gap={1} alignItems="left">
                <Heading size="sm">Explain your tech mastery here</Heading>
                <Text size="xs">
                  Explain your number of projects and experience
                </Text>
                <Heading size="xs" letterSpacing="2px">
                  Jan 01, 2020 ~ Jan 01, 2022
                </Heading>
              </VStack>
            </HStack>
          </div>
        );
      })}
    </Box>
  );
};

export default Skills;
