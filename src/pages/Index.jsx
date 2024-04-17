import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="black" color="white">
        <Heading mb={4} fontSize="6xl">
          The Rockers
        </Heading>
        <Text fontSize="xl" mb={8}>
          Join us on our world tour 2023!
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEzMzU4ODY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rockers Live" mb={4} />
        <VStack spacing={4}>
          <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
            Buy Tickets
          </Button>
          <Text>Follow us on social media</Text>
          <Flex>
            <Link href="https://instagram.com" isExternal mx={2}>
              <FaInstagram size="28px" />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="28px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebookF size="28px" />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
