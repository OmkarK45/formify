import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react"
export default function CreateFormForm() {
  return (
    <Box mb="1rem">
      <form action="">
        <FormControl>
          <FormLabel>Form Name : </FormLabel>
          <InputGroup>
            <Input
              shadow="base"
              isRequired={true}
              aria-describedby="email-helper-text"
              placeholder="A New Form"
            />
          </InputGroup>
        </FormControl>
        <FormControl marginTop="1.5rem">
          <FormLabel>Email Submissions to : </FormLabel>
          <InputGroup>
            <Input
              shadow="base"
              type="email"
              placeholder="you@example.com"
              isRequired={true}
              aria-describedby="email-helper-text"
            />
          </InputGroup>
        </FormControl>
      </form>
    </Box>
  )
}
