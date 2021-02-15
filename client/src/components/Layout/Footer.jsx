import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box padding="1rem 0">
      <Flex direction="column" alignItems="center">
        <Text fontSize="md" color="gray.600">
          Formify, LLP
        </Text>
        <Text fontSize="xs" color="gray.600">
          ©2021 Omkar Kulkarni. All Rights Reserved
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
