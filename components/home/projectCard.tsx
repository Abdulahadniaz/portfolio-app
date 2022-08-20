import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/Vsc";

const ProjectCard = () => {
  return (
    <VStack className="chars_container">
      {[1, 2, 3, 4].map((i, key) => {
        return (
          <div key={key}>
            <Box
              className="test"
              id="a"
              w="650px"
              bg="#202022"
              py="40px"
              px="30px"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.4s",
                cursor: "pointer",
              }}
            >
              <VStack alignItems="left" gap={1}>
                <Heading size="xs" letterSpacing="3px">
                  TYPESCRIPT
                </Heading>
                <Heading size="sm">Dinerojs/Diner.js</Heading>
                <Text size="xs">
                  Create, calculate, and format money in JavaScript and
                  TypeScript
                </Text>

                <Link href="https://github.com/Abdulahadniaz" passHref>
                  <ChakraLink target="_blank" _hover={{ textDecor: "none" }}>
                    <HStack gap={1} cursor="pointer">
                      <Icon as={VscGithub} color="portwhite.500" />
                      <Text size="xs" color="portwhite.500">
                        Github Link
                      </Text>
                      <Icon as={FiExternalLink} color="portwhite.500" />
                    </HStack>
                  </ChakraLink>
                </Link>
              </VStack>
            </Box>
          </div>
        );
      })}
    </VStack>
  );
};

export default ProjectCard;
