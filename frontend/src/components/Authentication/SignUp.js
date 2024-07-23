import React, { useState } from "react";
import {
  InputGroup,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  Show,
} from "@chakra-ui/react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const handleClick = () => setShow(!show);
  const postDetail = (pics) => {};
  const submitHandler = () => {};
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm_password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size={"md"}>
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={"1.5"}
          accept="image/*"
          onchange={(e) => postDetail(e.target.setPic[0])}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        color={"white"}
        style={{ marginTop: 15 }}
        onclick={submitHandler}
      >
        Sign Up{" "}
      </Button>
    </VStack>
  );
};

export default SignUp;
