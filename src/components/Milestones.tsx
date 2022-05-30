import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "April, 2022",
    description: `Based on the IEEE-SA P3220 NFT standard, the project research was initiated and the founding team was formed.`
  },
  {
    id: 2,
    date: "May, 2022",
    description: `The project was officially launched, and the first global NFT ID infrastructure construction seminar was held.`
  },
  {
    id: 3,
    date: "June, 2022",
    description:
      "The official website was launched to open media publicity and community promotion."
  },
  {
    id: 4,
    date: "July, 2022",
    description: "Start the first seed round sale of governance tokens."
  },
  {
    id: 5,
    date: "August, 2022",
    description: "Expand digital collection ecosystem partners."
  },
  {
    id: 6,
    date: "September, 2022",
    description: "Start the global NID node recruitment plan."
  },
  {
    id: 7,
    date: "October, 2022",
    description: "Release the NID Protocol whitepaper."
  },
  {
    id: 8,
    date: "November, 2022",
    description: "Launch of the second phase of the governance token sale."
  },
  {
    id: 9,
    date: "December, 2022",
    description: "Governance tokens go live on the coin exchanges."
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={3} mb={20}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Milestones
      </chakra.h3>
      <Box px={{ base: 2, lg: 8 }} mb={20}>
        {milestones.map(milestone => (
          <Flex key={milestone.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <Card {...milestone} />

                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

interface CardProps {
  id: number;
  description: string;
  date: string;
}

const Card = ({ id, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "blue.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#002266"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block"
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
