import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box as="main" bg="rgb(21, 21, 21)" minHeight="calc(100vh)">
        {children}
      </Box>
    </>
  );
};

export default Layout;
