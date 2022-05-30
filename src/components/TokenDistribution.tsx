import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  LightMode,
  VStack
} from "@chakra-ui/react";

export default function Wfl() {
  const Feature = props => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.700", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex p={3} w="auto" justifyContent="center" alignItems="center" mb={20}>
      <Box maxW="7xl" mx="auto" py={12} px={{ base: 2, lg: 8 }} mb={20}>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Token Distribution
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              The total number of tokens is 1 billion, and the distribution
              method is as follows
            </chakra.p>
            <LightMode>
              <Button w={{ base: "full", sm: "auto" }} colorScheme="blue">
                Become a Partner
              </Button>
            </LightMode>
          </Box>
          <VStack
            p={5}
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>DAO Treasury: 30%~40%</Feature>
            <Feature>Investors: 15%~20% </Feature>
            <Feature>Initial Core Team: 10%~20% </Feature>
            <Feature>Initial Founders: 15%~20% </Feature>
            <Feature>
              3rd-Party Contributors(Validators,withdrawal key signers): 5%~10%
            </Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
