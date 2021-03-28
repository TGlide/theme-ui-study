/** @jsxImportSource theme-ui */

import { Box, Flex, Grid, Link, Text } from "@theme-ui/components";
import Container from "../components/Container";
import Logo from "../components/Logo";
import { useTheme } from "../theme";

const Navbar = () => {
  const { theme } = useTheme();
  const { sizes } = theme;

  return (
    <Container
      as={Flex}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: sizes[8],
        paddingY: sizes[8],
      }}
    >
      <Logo />
      <Flex sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
        <Link>Showcase</Link>
        <Link sx={{ marginLeft: sizes[8] }}>Services</Link>
        <Link sx={{ marginLeft: sizes[8] }}>About</Link>
        <Link sx={{ marginLeft: sizes[8] }}>Blog</Link>
        <Link sx={{ marginLeft: sizes[8] }}>Contact</Link>
      </Flex>
    </Container>
  );
};

interface CardProps {
  imageSource: string;
  title: string;
  description: string;
}

const Card = ({ imageSource, title, description }: CardProps) => {
  const { theme } = useTheme();
  const { sizes } = theme;

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${imageSource})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "256px",
        }}
      />
      <Text as="p" sx={{ fontSize: sizes[5], paddingTop: sizes[4] }}>
        {title}
      </Text>
      <Text
        as="p"
        sx={{
          fontSize: sizes[4],
          lineHeight: sizes[6],
          paddingTop: sizes[4],
        }}
      >
        {description}
      </Text>
    </Box>
  );
};

const IndexPage = () => {
  const { theme } = useTheme();
  const { colors, fonts, sizes } = theme;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: fonts.body,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Navbar />
        <Container>
          <Text as="h1" sx={{ fontWeight: "300", fontSize: sizes[12] }}>
            Your go-to
            <br />
            digital agency
          </Text>
        </Container>

        <Container>
          <Text as="h3" sx={{ fontWeight: "300", fontSize: sizes[6] }}>
            Significa is a digital design-led agency mainly
            <br />
            focused on Product Development.
          </Text>
        </Container>
      </Flex>

      <Container
        as={Grid}
        gap={sizes[8]}
        columns={["repeat(3,1fr)"]}
        sx={{ paddingX: sizes[8], paddingY: sizes[8] }}
      >
        <Card
          title="Cimple - Public procurement made simple."
          description="Product Management, Branding, UI/UX, Front-End Development, Back-End
          Development"
          imageSource="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&fit=max&q=50&auto=compress%2Cformat"
        />
        <Card
          title="Cimple - Public procurement made simple."
          description="Product Management, Branding, UI/UX, Front-End Development, Back-End
          Development"
          imageSource="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&fit=max&q=50&auto=compress%2Cformat"
        />
        <Card
          title="Cimple - Public procurement made simple."
          description="Product Management, Branding, UI/UX, Front-End Development, Back-End
          Development"
          imageSource="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&fit=max&q=50&auto=compress%2Cformat"
        />
      </Container>
    </Box>
  );
};

export default IndexPage;
