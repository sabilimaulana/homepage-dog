import {
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/Bio";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Indonesia!
      </Box>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Sabili Maulana
        </Heading>
        <p>( Developer )</p>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sabili.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Sabili is a full-stack developer based in Jakarta with a passion for
          building digital services/stuff he wants. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portofolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Central Java, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated from SMK Negeri 1 Jakarta
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>Music, Playing Chess, Data Structure.</Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
