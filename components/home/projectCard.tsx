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
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/Vsc";
import { RiBaseStationLine } from "react-icons/Ri";
import { SiUpwork } from "react-icons/Si";

const ProjectCard = () => {
  return (
    <Box id="projects">
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
        Projects
      </Heading>

      <VStack className="chars_container">
        {projects.map((project, key) => {
          return (
            <div key={key}>
              <Box
                mx="auto"
                className="test"
                id="a"
                w={{
                  base: "100%",
                  lg: "650px",
                }}
                bg="#202022"
                py="35px"
                px="30px"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.4s",
                  cursor: "pointer",
                }}
              >
                <VStack alignItems="left" gap={1}>
                  <Heading size="xs" letterSpacing="3px">
                    {project.tech}
                  </Heading>
                  <Heading size="sm">{project.title}</Heading>
                  <Text size="xs">{project.desc}</Text>

                  <Link href={project.extLink} passHref>
                    <ChakraLink target="_blank" _hover={{ textDecor: "none" }}>
                      <HStack gap={1} cursor="pointer">
                        <Icon as={project.icon} color="portwhite.500" />
                        <Text size="xs" color="portwhite.500">
                          {project.iconText}
                        </Text>
                        <Icon as={project.linkIcon} color="portwhite.500" />
                      </HStack>
                    </ChakraLink>
                  </Link>
                </VStack>
              </Box>
            </div>
          );
        })}
      </VStack>
    </Box>
  );
};

export default ProjectCard;

const projects = [
  {
    tech: "TYPESCRIPT, NEXTJS, CHAKRA UI, ZUSTAND",
    title: "Intelliahub",
    desc: "Build a marketplace for financial analysts website from scratch supervised by Auxcube",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "",
  },
  {
    tech: "TYPESCRIPT, NEXTJS, CHAKRA UI",
    title: "Auxcube",
    desc: "Convert WP-based oragization's website to NextJs, using Typescript and Chakra UI.",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "",
  },
  {
    tech: "WORDPRESS, GUTENBERG",
    title: "Boards On Top",
    desc: "Developed a personal amazon affiliate website using Gutenberg, a wordpress extension",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "https://boardsontop.com/",
  },
  {
    tech: "TYPESCIPT, REACTJS, REDUX TOOLKIT, FAKERJS",
    title: "Librarium",
    desc: "A fairly small front-end web-application which serves as book management store",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "",
  },
  {
    tech: "",
    title: "Librarium",
    desc: "A fairly small front-end web-application which serves as book management store",
    icon: RiBaseStationLine,
    iconText: "Live Demo",
    linkIcon: FiExternalLink,
    extLink: "",
  },
];
