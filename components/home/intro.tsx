import {
  Box,
  Heading,
  VStack,
  Text,
  Link as ChakraLink,
  Divider,
  HStack,
  Image,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FaTwitter } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/Vsc";

const Intro = ({ children }: PropsWithChildren) => {
  return (
    <Box
      position={{
        base: "relative",
        lg: "fixed",
      }}
      overflow="hidden"
      w={{
        base: "100%",
        lg: "50%",
      }}
      h={{
        base: "inherit",
        xl: "calc(80vh)",
      }}
      display="flex"
      flexDir={{
        base: "column",
        lg: "column",
      }}
      justifyContent={{
        base: "center",
        lg: "space-between",
      }}
      gap={{
        base: "15px",
        lg: "0px",
      }}
      pb={{
        base: "20px",
        lg: "0px",
      }}
    >
      <Box>
        <VStack alignItems="left" gap={4}>
          <Heading
            size={{
              base: "md",
              md: "lg",
              lg: "xl",
            }}
            lineHeight={{
              base: "4.375rem",
            }}
          >
            Abdul Ahad Niaz
          </Heading>
          <Heading
            size={{
              base: "sm",
            }}
            lineHeight={{
              base: "1.25",
            }}
          >
            Software Engineer at Auxcube
          </Heading>
          <VStack alignItems="left">
            <Text
              size="xs"
              maxW={{
                base: "fit-content",
                lg: "400px",
              }}
              lineHeight="28px"
            >
              I build meaningful and responsive web applications, and work as a
              Software Developer at{" "}
              {
                <Link href="https://auxcube.com/" passHref>
                  <ChakraLink textDecoration="underline" target="_blank">
                    Auxcube
                  </ChakraLink>
                </Link>
              }
            </Text>
            <Text size="xs" maxW="400px" lineHeight="28px">
              During my spare time, I explore new technologies and use them in
              my side{" "}
              {
                <Link
                  href="https://github.com/Abdulahadniaz"
                  passHref
                  target="_blank"
                >
                  <ChakraLink textDecoration="underline" target="_blank">
                    projects
                  </ChakraLink>
                </Link>
              }
            </Text>
          </VStack>
          <VStack
            alignItems="left"
            pt="50px"
            gap={8}
            display={{
              base: "none",
              lg: "flex",
            }}
          >
            <Link href="/" passHref>
              <ChakraLink
                _hover={{
                  textDecoration: "none",
                  color: "portwhite.500",
                }}
              >
                <Box display="flex" flexDir="row" alignItems="center" gap={4}>
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    01
                  </Heading>
                  <Box className="line"></Box>
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    PROJECTS
                  </Heading>
                </Box>
              </ChakraLink>
            </Link>
            <Link href="/" passHref>
              <ChakraLink
                _hover={{
                  textDecoration: "none",
                  color: "portwhite.500",
                }}
              >
                <Box
                  display="flex"
                  flexDir={{
                    base: "column",
                    lg: "row",
                  }}
                  alignItems="center"
                  gap={4}
                >
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    02
                  </Heading>
                  <Box className="line"></Box>
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    WORK EXPERIENCE
                  </Heading>
                </Box>
              </ChakraLink>
            </Link>
            <Link href="/" passHref>
              <ChakraLink
                _hover={{
                  textDecoration: "none",
                  color: "portwhite.500",
                }}
              >
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  gap={4}
                  maxW="fit-content"
                >
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    03
                  </Heading>
                  <Box className="line"></Box>
                  <Heading
                    size="xs"
                    cursor="pointer"
                    letterSpacing="2px"
                    color="portwhite.600"
                  >
                    SKILLS
                  </Heading>
                </Box>
              </ChakraLink>
            </Link>
          </VStack>
        </VStack>
      </Box>
      <Box>
        <HStack
          gap={{
            base: 6,
            lg: 8,
          }}
          cursor="pointer"
        >
          <Image
            src="/assets/images/img.jpg"
            alt="img"
            borderRadius="50%"
            w="48px"
            h="48px"
          />
          <Link href="https://twitter.com/abdulahad_says" passHref>
            <ChakraLink target="_blank" _hover={{ textDecor: "none" }}>
              <HStack gap={2} cursor="pointer">
                <Icon as={FaTwitter} color="portwhite.500" />
                <Text size="xs" color="portwhite.500">
                  Twitter
                </Text>
                <Icon as={FiExternalLink} color="portwhite.500" />
              </HStack>
            </ChakraLink>
          </Link>
          <Link href="https://github.com/Abdulahadniaz" passHref>
            <ChakraLink target="_blank" _hover={{ textDecor: "none" }}>
              <HStack gap={2} cursor="pointer">
                <Icon as={VscGithub} color="portwhite.500" />
                <Text size="xs" color="portwhite.500">
                  Github
                </Text>
                <Icon as={FiExternalLink} color="portwhite.500" />
              </HStack>
            </ChakraLink>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Intro;
