import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <title>Sabili Maulana - HomePage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </div>
  );
};

export default Main;
