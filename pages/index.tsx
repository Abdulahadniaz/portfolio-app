import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/home/pageLayout";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout />
    </>
  );
};

export default Home;
