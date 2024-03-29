import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Progress,
  useToast,
} from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import { POST } from "../../utils/network"
import userContext from "./../../context/userContext"

export default function EmailVerified() {
  const { setUser } = useContext(userContext)
  const history = useHistory()
  const { verificationToken } = useParams()
  const toast = useToast()

  useEffect(() => {
    const sendVerficationToken = async () => {
      try {
        await POST(
          process.env.REACT_APP_BACKEND + "/api/auth/emailverification",
          {
            verificationToken,
          }
        ).then((res) => {
          setUser({
            isAuthenticated: true,
            userID: res.data.userID,
          })
          setTimeout(() => {
            history.push("/dashboard/forms")
          }, 2000)
          console.log(res)
        })
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again.",
          status: "error",
          isClosable: true,
        })
      }
    }
    sendVerficationToken()
  }, [])
  return (
    <Box>
      <Progress size="xs" isIndeterminate />
      <Box
        rounded="10px"
        maxW={["90%", "75%", "75%", "50%", "30%"]}
        mx="auto"
        mt="3rem"
        shadow="base"
      >
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Account verified!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for registering. You will now be redirected to dashboard.
          </AlertDescription>
        </Alert>
      </Box>
    </Box>
  )
}
