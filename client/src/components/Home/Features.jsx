import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { FaCheckCircle as CheckIcon } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom"

import PremiumBadge from "../Utils/PremiumBadge"

export function Features() {
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
                  Add reCaptcha verification to forms <PremiumBadge />
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  Custom thank you screen <PremiumBadge />
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

const faqItems = [
  {
    title: "Is this free ?",
    text: `No lol.`,
  },
  {
    title: "Is this free ?",
    text: `No lol.`,
  },
  {
    title: "Is this free ?",
    text: `No lol.`,
  },
]

export const FAQ = () => {
  return (
    <Box as="section" bg="panels.white" w="full">
      <Container maxW="container.lg" py="section.lg">
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
        >
          <Heading as="h3" size="xl" color="text.primary.base" mb={12}>
            FAQ
          </Heading>
          <Accordion w="full">
            {faqItems.map((item, index) => (
              <AccordionItem key={`accordion-item-${index}`}>
                <AccordionButton>
                  <Flex grow={1} my={3} justify="center">
                    <Text color="text.onLight.dark">{item.title}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} color="text.onLight.base">
                  {item.text}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </Box>
  )
}

export const CTA = () => {
  return (
    <Box as="section" w="full" py={20}>
      <Container maxW="container.md">
        <Box
          rounded="lg"
          shadow="base"
          overflow="hidden"
          bg={useColorModeValue("green.200", "green.600")}
        >
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex
              direction="column"
              align="flex-start"
              w={{ base: "full", lg: 8 / 12 }}
              p={6}
            >
              <Text
                fontStyle="italic"
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="heading"
              >
                Join the preview beta.
              </Text>
              <Text py={4}>Explore the application in early access.</Text>
              <Button colorScheme="green">Let's go</Button>
            </Flex>

            <Image
              w={{ base: "full", md: 5 / 12, lg: 4 / 12 }}
              h={{ base: "150px", md: "auto", lg: "auto" }}
              borderLeftRadius={{ base: "none", md: "full" }}
              alt="Beta"
              fit="cover"
              src="https://placekitten.com/451/301"
            />
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
