import {
  Box,
  Input,
  Button,
  Text,
  useColorModeValue,
  VStack,
  Switch,
  HStack,
  IconButton,
} from "@chakra-ui/react"
import { HiOutlineTrash } from "react-icons/hi"
import { MdSave } from "react-icons/md"
import Setting from "./Setting"
export default function FormSettings() {
  return (
    <Box>
      <Setting>
        <VStack spacing={8} align="stretch" maxW={["95%", "90%", "80%"]}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Form Name
            </Text>
            <HStack mt="0.7rem" spacing={8} justify="space-between">
              <Input
                readOnly
                bg={useColorModeValue("gray.50", "gray.700")}
                value="Form Name"
              />
              <Button
                leftIcon={<MdSave />}
                variant="outline"
                colorScheme="orange"
                type="submit"
              >
                Save
              </Button>
            </HStack>
          </Box>
          <HStack justify="space-between">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Form Enabled
              </Text>
              <Text>This will disable all new submissions to this form</Text>
            </Box>
            <Switch colorScheme="orange" size="lg" />
          </HStack>
          <HStack justify="space-between">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Email Notification
              </Text>
              <Text>
                Enable or disable Email Notifications about new form submissions
              </Text>
            </Box>
            <Switch colorScheme="orange" size="lg" />
          </HStack>
          <HStack justify="space-between">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Requires reCaptcha
              </Text>
              <Text>
                reCaptcha reduces amount of spam by only allowing humans to
                submit forms :) It enables redirect.
              </Text>
            </Box>
            <Switch colorScheme="orange" size="lg" />
          </HStack>
          <HStack justify="space-between">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Delete this form
              </Text>
              <Text>
                This will remove all submissions from this form. Proceed with
                caution
              </Text>
            </Box>
            <IconButton icon={<HiOutlineTrash />} />
          </HStack>
        </VStack>
      </Setting>
    </Box>
  )
}
