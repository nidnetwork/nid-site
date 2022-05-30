import {
  Box,
  Flex,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  LightMode,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { LogoIcon } from "./LogoIcon";

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")} pb={10}>
      <Container as={Stack} maxW={"7xl"} py={10} px={2}>
        <SimpleGrid
          px={{ base: 2, lg: 8 }}
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Flex flex={{ base: 1 }} alignItems={"center"}>
                <LogoIcon
                  width={{ base: 8 }}
                  height={{ base: 8 }}
                  color="gray.300"
                />
                <Text
                  ml={2}
                  fontFamily={"heading"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.800", "white")}
                >
                  NID Network
                </Text>
              </Flex>
            </Box>

            <Text fontSize={"sm"}>© 2022 NID Network. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300"
                }}
              />
              <LightMode>
                <IconButton
                  colorScheme="blue"
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </LightMode>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
