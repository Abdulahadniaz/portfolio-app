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
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/Vsc";

const WorkExperience = ({ children }: PropsWithChildren) => {
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
      {[1, 2, 3, 4].map((i, key) => {
        return (
          <div key={key} className="work-card">
            <VStack
              mt={{
                base: "5px",
                lg: i === 2 ? "50px" : i === 3 ? "-50px" : "0px",
              }}
              // w={{
              //   base: "100%",
              //   lg: "45%",
              // }}
              bg="#202022"
              alignItems="left"
              gap={12}
              py="20px"
              px="30px"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.4s",
                cursor: "pointer",
              }}
              maxH={{
                base: "320px",
                lg: "330px",
              }}
            >
              <VStack alignItems="left">
                <Heading size="base" letterSpacing="3px">
                  Software Engineer
                </Heading>
                <Text size="xs">Jan 01, 2020 ~ Jan 01, 2021</Text>
              </VStack>
              <VStack alignItems="left" gap={1}>
                <Heading size="sm" fontWeight="semibold">
                  Working as the Software Engineer and developing elegant IT
                  appications
                </Heading>
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
            </VStack>
          </div>
        );
      })}
    </Box>
  );
};

export default WorkExperience;
