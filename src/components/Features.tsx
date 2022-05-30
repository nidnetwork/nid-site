import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack
} from "@chakra-ui/react";

export default function C2g() {
  const Feature = props => {
    return (
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("blue.500", "blue.500")}
            color={useColorModeValue("gray.100", "gray.900")}
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box pl={{ base: 0, md: 2 }}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.600", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Stack>
    );
  };

  return (
    <Flex p={3} w="auto" justifyContent="center" alignItems="center">
      <Box py={12}>
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "brand.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              NID Network
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900", "gray.100")}
            >
              The NFT Unique ID protocol
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Build NFT infrastructure through collaborative development of NFT
              TokenID protocols and standards
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="NFT unique identity over all chains"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                By formulating the cross-chain NFT TokenID protocol (NID
                Protocol), the problem of unique identification of cross-chain
                NFTs can be solved, and the NNS service can be launched to
                facilitate users to accurately find NFT assets.
              </Feature>

              <Feature
                title="Distribute NFTs to different chains"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Relying on the NID Registry, creators can distribute NFTs to
                multiple chains at the same time and manage multi-chain NFT
                assets.
              </Feature>

              <Feature
                title="Cross-Chain NFT transfer"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Create a Cross-Chain NID Registry, and build an NFT cross-chain
                mechanism based on this, unlock the NFT cross-chain liquidity,
                and build an NFT full ecological circulation system.
              </Feature>

              <Feature
                title="Purchase NFTs on the omnichain marketplace"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                NID Registry also provides indexing services, which provide
                discovery and ranking capabilities for NFTs and form the NFT
                market.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
