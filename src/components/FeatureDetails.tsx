import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  LightMode,
  useColorModeValue
} from "@chakra-ui/react";
import Illustration1 from "../assets/feature-1";
import Illustration2 from "../assets/feature-2";
import Illustration3 from "../assets/feature-3";
import Illustration4 from "../assets/feature-4";

export default function Asm() {
  return (
    <Flex p={3} w="full" justifyContent="center" alignItems="center">
      <Box maxW="7xl" px={{ base: 2, lg: 8 }} py={20} mx="auto">
        <SimpleGrid
          mb={20}
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              NID Protocol
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              NID is a unique ID on multiple chains as an NFT, and is generated
              by combining parts such as Chain ID to ensure that there is no
              duplication across chains
            </chakra.p>
            <LightMode>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                colorScheme="blue"
              >
                Learn More
              </Button>
            </LightMode>
          </Box>

          <Illustration1 height={{ sm: "24rem", lg: "28rem" }} />
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              Cross-Chain NID Registry
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              NFT follows the NID Protocol rules for Mint on Chain, creates
              associated records in the NID Registry, and the NID Registry
              verifies the associated records according to the NID Protocol
              rules
            </chakra.p>
            <LightMode>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                colorScheme="blue"
                as="a"
              >
                Learn More
              </Button>
            </LightMode>
          </Box>
          <Illustration2 height={{ sm: "24rem", lg: "28rem" }} />
        </SimpleGrid>

        <SimpleGrid
          mb={20}
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              NID NNS (NFT Naming System)
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              NID NNS is an NFT domain name system based on the NID Registry,
              where users can enter short domain names, such as ape.nns, to
              quickly locate NFTs
            </chakra.p>
            <LightMode>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                colorScheme="blue"
              >
                Learn More
              </Button>
            </LightMode>
          </Box>

          <Illustration3 height={{ sm: "24rem", lg: "28rem" }} />
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              NFT Fluent Infrastructure Chain Services
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              The platform base that empowers the full life cycle of NFTs, and
              defines the NFT life cycle processes such as Pre Mint, Mint,
              Issuance, Pre-trade, Trade, and Post Trade.
            </chakra.p>
            <LightMode>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                colorScheme="blue"
                as="a"
              >
                Learn More
              </Button>
            </LightMode>
          </Box>
          <Illustration4 height={{ sm: "24rem", lg: "28rem" }} />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
