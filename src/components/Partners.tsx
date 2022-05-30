import { Box, chakra, Container, SimpleGrid, Image } from "@chakra-ui/react";
import taiyi from "../assets/partners/taiyi.png";

const Index = () => {
  return (
    <Container maxWidth="7xl" p={3} mb={20}>
      <chakra.h3
        fontSize="4xl"
        fontWeight="bold"
        mb={"28px"}
        textAlign="center"
      >
        NID Partners
      </chakra.h3>

      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        spacing="20px"
        px={{ base: 2, lg: 8 }}
        mb={20}
      >
        <Box bg="gray.900" height="80px" rounded="md">
          <Image src={taiyi.src} h="80px" />
        </Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
        <Box bg="blue.800" height="80px" rounded="md"></Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
