import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FaCheckCircle as CheckIcon } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom"
export default function Features() {
  return (
    <Box as="section" w="full" overflow="hidden">
      <Container maxW="container.xl" py={16}>
        <Flex
          direction={{ base: "column", md: "row" }}
          h={{ base: "auto", md: 700 }}
        >
          <VStack
            direction="column"
            align="flex-start"
            justify="center"
            w={{ base: "full", md: 7 / 12 }}
            spacing={6}
            pr={{ base: 0, md: 24 }}
            mb={{ base: 12, md: 0 }}
          >
            <Heading
              as="h2"
              fontSize="4xl"
              fontWeight="bold"
              color="text.onLight.base"
            >
              All your forms in one place.
            </Heading>
            <Text fontWeight="bold">
              Manage and monitor your created forms. Create upto 7 forms in free
              tier*
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              convallis facilisis molestie. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </Text>
            <Box>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Email Notifications
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Store upto 45 submissions per form/pm
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Create upto 7 forms
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Add reCaptcha verification to forms
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Custom thank you screen
                </ListItem>
              </List>
            </Box>
            <Button
              rounded={"full"}
              as={RouterLink}
              to="/auth"
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.500"}
              color="white"
              _hover={{ bg: "orange.600" }}
            >
              Get started
            </Button>
          </VStack>
          <Center w={{ base: "full", md: 5 / 12 }} position="relative">
            <Image
              shadow="lg"
              rounded="10px"
              overflow="hidden"
              alt="Dashboard screenshot"
              src="./assets/dark2.png"
              h={{ base: "auto", md: 566 }}
              w={{ base: "full", md: 1109 }}
              maxW="unset"
              position={{ base: "relative", md: "absolute" }}
              left={0}
            />
          </Center>
        </Flex>
      </Container>
    </Box>
  )
}
