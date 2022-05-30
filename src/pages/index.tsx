import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeatureDetails from "../components/FeatureDetails";
import Partners from "../components/Partners";
import TokenDistribution from "../components/TokenDistribution";
import Milestones from "../components/Milestones";
import Footer from "../components/Footer";

const Index = () => (
  <Box bgGradient="linear(to-r, gray.900, blue.900, gray.900)">
    <Header />
    <Hero />
    <Features />
    <FeatureDetails />
    <Milestones />
    <TokenDistribution />
    <Partners />
    <Footer />
  </Box>
);

export default Index;
