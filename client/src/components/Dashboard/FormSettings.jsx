import { useState, useEffect } from "react"
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
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react"
import { HiOutlineTrash } from "react-icons/hi"
import { MdSave } from "react-icons/md"
import Setting from "./Setting"
import { PUT } from "./../../utils/network"
// Settings need some work
export default function FormSettings({
  form: {
    disabled,
    emailNotifications,
    requiresVerification,
    formName,
    formID,
  },
}) {
  const toast = useToast()
  const [settings, setSettings] = useState({
    disabled,
    emailNotifications,
    requiresVerification,
    formName,
  })
  // @TODO -> This needs work
  async function handleUpdate(e) {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked,
    })
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
        toast({
          title: "OK",
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <form onSubmit={handleUpdate}>
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
                  value={settings.formName}
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
                  isChecked={settings.disabled}
                  colorScheme="orange"
                  size="lg"
                  name="disabled"
                  onChange={handleUpdate}
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
                  onChange={handleUpdate}
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
                  onChange={handleUpdate}
                />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack justify="space-between">
                <FormLabel htmlFor="delete-form" mb="0">
                  <Text fontSize="lg" fontWeight="bold">
                    Delete this form
                  </Text>
                  <Text>
                    This will remove all submissions from this form. Proceed
                    with caution
                  </Text>
                </FormLabel>
                <IconButton icon={<HiOutlineTrash />} />
              </HStack>
            </FormControl>
          </VStack>
        </Setting>
      </form>
    </Box>
  )
}
