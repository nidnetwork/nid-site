import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  LightMode,
  useColorModeValue
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Illustration from "../assets/hero-1";

export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={3}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight="extrabold"
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          >
            <Text as={"span"}>To Fuel the NFT world</Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              everywhere!
            </Text>
          </Heading>
          <Text color={"gray.300"}>
            Fluent in millions of NFTs traversing in the coming millions of
            Metaverses
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <LightMode>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                rightIcon={<ArrowForwardIcon />}
              >
                Get started
              </Button>
            </LightMode>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Illustration height={{ sm: "24rem", md: "28rem" }} />
        </Flex>
      </Stack>
    </Container>
  );
}
