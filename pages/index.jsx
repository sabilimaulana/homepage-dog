import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Indonesia!
      </Box>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}></Box>
      <Heading as="h2" variant="page-title">
        Sabili Maulana
      </Heading>
      <p>( Developer )</p>
    </Container>
  );
};

export default Page;
