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
import { RiBaseStationLine } from "react-icons/Ri";
import { SiUpwork } from "react-icons/Si";

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

      {workExp.map((work, key) => {
        return (
          <div key={key} className="work-card">
            <VStack
              mt={{
                base: "5px",
                lg:
                  work.itemNo === 2
                    ? "50px"
                    : work.itemNo === 3
                    ? "-50px"
                    : "0px",
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
                  {work.role}
                </Heading>
                <Text size="xs">{work.duration}</Text>
              </VStack>
              <VStack alignItems="left" gap={1}>
                <Heading size="sm" fontWeight="semibold">
                  {work.desc}
                </Heading>
                <Link href={work.extLink} passHref>
                  <ChakraLink target="_blank" _hover={{ textDecor: "none" }}>
                    <HStack gap={1} cursor="pointer">
                      <Icon as={work.icon} color="portwhite.500" />
                      <Text size="xs" color="portwhite.500">
                        {work.iconText}
                      </Text>
                      <Icon as={work.linkIcon} color="portwhite.500" />
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

const workExp = [
  {
    itemNo: 1,
    role: "Software Engineer",
    duration: "Feb 15, 2022 ~ active",
    desc: "Working as the Software Engineer and developing elegant IT applications",
    icon: VscGithub,
    iconText: "Github Link",
    linkIcon: FiExternalLink,
    extLink: "https://github.com/Abdulahadniaz",
  },
  {
    itemNo: 2,
    role: "Wordpress Developer",
    duration: "Oct 01, 2021 ~ active",
    desc: "Self-taught and self-employeed WP developer with personal affiliate websites",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "https://boardsontop.com/",
  },
  {
    itemNo: 3,
    role: "Freelancer",
    duration: "July 01, 2020 ~ active",
    desc: "Hands-on experience in small to complex projects in Selenium, Python, and web development.",
    icon: SiUpwork,
    iconText: "Profile Link",
    linkIcon: FiExternalLink,
    extLink:
      "https://www.upwork.com/freelancers/~0175982e3d6050d16d?viewMode=1",
  },
  {
    itemNo: 4,
    role: "Databse Devloper",
    duration: "May 01, 2020 ~ August 02, 2021",
    desc: "Internee at Muhdin Enterprise Ltd and developed a medium scaled SQL database server in python",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "",
  },
];
