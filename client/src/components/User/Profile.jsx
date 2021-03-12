import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react"
import { useContext, useState } from "react"

import Setting from "../Layout/Setting"
import userContext from "./../../context/userContext"

export default function Profile() {
  const { user } = useContext(userContext)
  const [data, setData] = useState({
    email: user.email,
  })
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box>
      <form>
        <Setting
          settingTitle="Profile"
          settingDescription="You can view or change existing profile settings. Make sure to save your settings after making changes."
          mb={4}
        >
          <VStack spacing={4} mt={4} align="flex-start">
            <HStack spacing={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  readOnly
                  value={data.email}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </HStack>
          </VStack>
        </Setting>
      </form>
      <Setting
        settingTitle="Danger Zone"
        settingDescription="Proceed only if you know what are you doing."
      >
        <HStack justifySelf="flex-end" mt={4}>
          <Button colorScheme="red">Deactivate Account</Button>
        </HStack>
      </Setting>
    </Box>
  )
}
