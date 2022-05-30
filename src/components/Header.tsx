import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  LightMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { LogoIcon } from "./LogoIcon";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          alignItems={"center"}
          justify={{ base: "center", md: "start" }}
        >
          <LogoIcon
            width={{ base: 8 }}
            height={{ base: 8 }}
            color="blue.500"
            display={{ base: "none", md: "inline-flex" }}
          />
          <Text
            ml={2}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontWeight={"bold"}
            color={useColorModeValue("gray.800", "white")}
          >
            NID Network
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <LightMode>
            <Button
              leftIcon={<MdOutlineAccountBalanceWallet />}
              colorScheme="blue"
              display={{ base: "none", md: "inline-flex" }}
            >
              Connect Wallet
            </Button>
          </LightMode>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.700");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor
                }}
              >
                {navItem.label}
                {navItem.children && (
                  <Icon
                    ml={1}
                    as={ChevronDownIcon}
                    transition={"all .25s ease-in-out"}
                  />
                )}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color="gray.400">
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none"
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About NID",
    children: [
      {
        label: "Introduction",
        subLabel: "NID background, target, etc.",
        href: "/"
      },
      {
        label: "NID Protocol",
        subLabel: "NFT TokenID protocol whitepaper",
        href: "/"
      },
      {
        label: "NID Manifesto",
        subLabel: "",
        href: "/"
      },
      {
        label: "Token Distribution",
        subLabel: "An economy that is owned and governed by its participants",
        href: "/"
      },
      {
        label: "Token Economics",
        subLabel: "The fuel that powers the Metaverses",
        href: "/"
      }
    ]
  },
  {
    label: "Products",
    children: [
      {
        label: "By NID Token",
        subLabel: "Get $NID with your USDT",
        href: "/"
      },
      {
        label: "NID Wallet",
        subLabel: "Collect your NFTs in wallet",
        href: "#"
      },
      {
        label: "My NNS",
        subLabel: "Get a short name for your NFT",
        href: "#"
      },
      {
        label: "Marketplace",
        subLabel: "Exchange your NFTs",
        href: "#"
      },
      {
        label: "NID Explorer",
        subLabel: "NID information explorer",
        href: "#"
      }
    ]
  },
  {
    label: "Developers",
    children: [
      {
        label: "Developer Docs",
        subLabel: "",
        href: "#"
      },
      {
        label: "NID Playground",
        subLabel: "",
        href: "#"
      }
    ]
  },
  {
    label: "Community",
    href: "/"
  },
  {
    label: "Blog",
    href: "/"
  }
];
