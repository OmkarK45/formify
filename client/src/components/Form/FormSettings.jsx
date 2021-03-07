import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"

import { PUT } from "../../utils/network"
import Setting from "../Layout/Setting"

// Settings need some work
export default function FormSettings({
  form: { enabled, emailNotifications, requiresVerification, formName, formID },
}) {
  const [settings, setSettings] = useState({
    enabled,
    emailNotifications,
    requiresVerification,
    formName,
  })
  console.log({ settings })
  // @TODO -> This needs work
  const toast = useToast()
  function handleInputChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    console.log(e.target.type)
    console.log(e.target.name)
    setSettings({
      ...settings,
      [e.target.name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!settings.formName) {
      return toast({
        title: "Form name is required",
        status: "error",
      })
    }
    try {
      await PUT(
        process.env.REACT_APP_BACKEND + "/api/forms/" + formID + "/settings",
        {
          ...settings,
          formID,
        },
        {
          withCredentials: true,
        }
      ).then((res) => {
        return toast({
          title: "Settings saved!",
          status: "success",
          isClosable: true,
        })
      })
    } catch (error) {
      return toast({
        title: "Failed to save settings",
        status: "error",
        isClosable: true,
      })
    }
  }
  return (
    <Box mt={4}>
      <form onSubmit={handleSubmit}>
        <Setting mb={8}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Form Name
              </Text>
              <HStack mt="0.7rem" spacing={8} justify="space-between">
                <Input
                  bg={useColorModeValue("gray.50", "gray.700")}
                  defaultValue={formName}
                  value={settings.formName}
                  onChange={handleInputChange}
                  name="formName"
                />
              </HStack>
            </Box>

            <FormControl>
              <HStack justify="space-between">
                <FormLabel htmlFor="form-disable" mb="0">
                  <Text fontSize="lg" fontWeight="bold">
                    Form Enabled
                  </Text>
                  <Text>
                    This will disable all new submissions to this form
                  </Text>
                </FormLabel>
                <Switch
                  id="form-disable"
                  isChecked={settings.enabled}
                  colorScheme="orange"
                  size="lg"
                  name="enabled"
                  onChange={handleInputChange}
                />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack justify="space-between">
                <FormLabel htmlFor="email-alerts" mb="0">
                  <Text fontSize="lg" fontWeight="bold">
                    Email Notification
                  </Text>
                  <Text>
                    Enable or disable Email Notifications about new form
                    submissions
                  </Text>
                </FormLabel>
                <Switch
                  isChecked={settings.emailNotifications}
                  id="email-alerts"
                  colorScheme="orange"
                  size="lg"
                  name="emailNotifications"
                  onChange={handleInputChange}
                />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack justify="space-between">
                <FormLabel htmlFor="requires-captcha" mb="0">
                  <Text fontSize="lg" fontWeight="bold">
                    Requires reCaptcha
                  </Text>
                  <Text>
                    Enable or disable Email Notifications about new form
                    submissions
                  </Text>
                </FormLabel>
                <Switch
                  isChecked={settings.requiresVerification}
                  id="requires-captcha"
                  colorScheme="orange"
                  size="lg"
                  name="requiresVerification"
                  onChange={handleInputChange}
                />
              </HStack>
            </FormControl>
            <Stack direction="row-reverse">
              <Button type="submit" colorScheme="orange">
                Save
              </Button>
              <Button>Cancel</Button>
            </Stack>
          </VStack>
        </Setting>
      </form>
      <Setting>
        <FormControl>
          <HStack justify="space-between">
            <FormLabel htmlFor="delete-form" mb="0">
              <Text fontSize="lg" fontWeight="bold">
                Delete this form
              </Text>
              <Text>
                This will remove all submissions from this form. Proceed with
                caution
              </Text>
            </FormLabel>
            <Button colorScheme="red">Delete</Button>
          </HStack>
        </FormControl>
      </Setting>
    </Box>
  )
}
