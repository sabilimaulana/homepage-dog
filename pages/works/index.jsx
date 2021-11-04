import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../../components/GridItem";
import Section from "../../components/Section";
import thumbInkdrop from "../../public/images/works/inkdrop_eyecatch.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          {/* <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A markdown note-taking app with 100+ encrypted data sync support
          </WorkGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
