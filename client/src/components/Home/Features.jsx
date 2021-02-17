// import {
//   Box,
//   SimpleGrid,
//   Icon,
//   Text,
//   Stack,
//   Flex,
//   Heading,
// } from "@chakra-ui/react"
// import features from "./featuresDb"

// export default function SimpleThreeColumns() {
//   return (
//     <Box m="0 auto" maxW={["100%", "80%", "80%"]} p={4}>
//       <Heading>Features.</Heading>
//       <SimpleGrid mt="2rem" columns={{ base: 1, md: 3 }} spacing={10}>
//         {features.map((feature) => (
//           <Stack key={feature.id}>
//             <Flex
//               bg={"orange.500"}
//               w={10}
//               h={10}
//               p={2}
//               borderRadius={"50%"}
//               align={"center"}
//               justify={"center"}
//               rounded={"md"}
//               color="white"
//               mb={1}
//             >
//               {feature.icon}
//             </Flex>
//             <Text fontWeight={600}>{feature.title}</Text>
//             <Text color={"gray.600"}>{feature.description}</Text>
//           </Stack>
//         ))}
//       </SimpleGrid>
//     </Box>
//   )
// }

import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
export default function SimpleThreeColumns() {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    )
  }
  return (
    <Flex
      maxW={["100%", "90%", "75%"]}
      margin="0 auto"
      justifyContent="center"
      alignItems="center"
      borderRadius="15px"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("gray.900")}
          >
            Features
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Get insights to dig down into what's powering your growth the most.
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="red"
            title="Personal Emails"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            Hand crafted dashboards for everything from Recurring Revenue to
            Customer Churn.
          </Feature>
          <Feature
            color="purple"
            title="Performance on Fire"
            icon={
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            }
          >
            How does your company compare? Learn how your company stacks up in
            the industry.
          </Feature>
          <Feature
            color="brand"
            title="Thunder and Lightning"
            icon={
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            }
          >
            Improve your conversion rates by monitoring exactly what’s going on
            while your customers are in trial.
          </Feature>

          <Feature
            color="pink"
            title="Sparkles"
            icon={
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            }
          >
            Merge external data with your metrics for deeper insights in to your
            customers and your business.
          </Feature>

          <Feature
            color="red"
            title="Stars"
            icon={
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            }
          >
            Want your metrics in other services? Extend and integrate to our
            every part of your business.
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
