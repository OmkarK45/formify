import {
  Box,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react"
import { useContext, useState } from "react"

import Setting from "../Layout/Setting"
import userContext from "./../../context/userContext"
import ModalAlert from "./../Utils/Modal"

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
  const handleAccountDelete = () => {}
  return (
    <Box>
      {/* @todo -> make this responsive */}
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
        <ModalAlert
          buttonTitle="Deactivate Account"
          buttonColorScheme="red"
          modalTitle="Deactivate account"
          modalContent="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
          modalStatus="danger"
          buttonAction="Delete"
          handleAccountDelete={handleAccountDelete}
          mt={4}
        />
      </Setting>
    </Box>
  )
}
