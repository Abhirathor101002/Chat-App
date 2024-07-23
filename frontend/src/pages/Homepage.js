import { Container, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login"; // Adjust path as needed
import SignUp from "../components/Authentication/SignUp";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" CenterContent>
      <Box
        d="flex"
        p={3}
        bg={"white"}
        w="100%"
        m="400px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Start Connecting
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        color={"black"}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <p>
                <SignUp />
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
