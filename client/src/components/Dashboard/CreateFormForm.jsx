import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Select,
  useToast,
} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FaRegTimesCircle } from "react-icons/fa"

import userContext from "../../context/userContext"
import { POST } from "../../utils/network"
import { useHistory } from "react-router-dom"

export default function CreateFormForm() {
  const { user } = useContext(userContext)
  const [buttonLoading, setButtonLoading] = useState(false)
  const history = useHistory()
  const toast = useToast()
  const [values, setValues] = useState({
    val: [{ fieldValue: "", fieldType: "" }],
  })

  const [data, setData] = useState({
    formName: "",
    email: "",
  })

  function createInputs() {
    return values.val.map((el, i) => (
      <HStack spacing={4} my={4} key={i}>
        <Input
          type="text"
          placeholder="name attribute value"
          value={el.fieldValue || ""}
          onChange={handleChange.bind(i)}
        />

        <Select
          onChange={handleSelectChange.bind(i)}
          placeholder="Select Type of Input"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="time">Time</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
        </Select>
        <IconButton
          variant="ghost"
          shadow="none"
          icon={<FaRegTimesCircle />}
          onClick={removeClick.bind(i)}
        />
      </HStack>
    ))
  }
  function handleSelectChange(event) {
    let vals = [...values.val]
    vals[this].fieldType = event.target.value
    setValues({ val: vals })
    console.log(event.target.value)
  }

  function handleChange(event) {
    let vals = [...values.val]
    vals[this].fieldValue = event.target.value
    setValues({ val: vals })
  }

  const addClick = () => {
    setValues({ val: [...values.val, { fieldType: "", fieldValue: "" }] })
  }

  const removeClick = () => {
    let vals = [...values.val]
    vals.splice(this, 1)
    setValues({ val: vals })
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    setButtonLoading(true)
    e.preventDefault()
    const payload = {
      formName: data.formName,
      fields: values.val,
    }
    try {
      await POST(
        `${process.env.REACT_APP_BACKEND}/api/forms/${user.username}/create`,
        payload
      )
        .then((res) => {
          setButtonLoading(false)
          if (res.status === 200) {
            toast({
              title: "Form created!",
            })
            history.push("/dashboard/forms/" + res.data.newForm.formID)
          } else {
            throw new Error("Something went wrong")
          }
        })
        .catch((err) => {
          setButtonLoading(false)
          toast({
            title: err,
            description: "Something went wrong",
            status: "error",
          })
        })
    } catch (error) {
      toast({
        title: "Error",
        description: error,
      })
      console.log(error)
    }
  }

  return (
    <Box mb="1rem">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Form Name : </FormLabel>
          <InputGroup>
            <Input
              shadow="base"
              isRequired={true}
              aria-describedby="email-helper-text"
              placeholder="A New Form"
              onChange={handleInputChange}
              name="formName"
              value={data.formName}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired marginTop="1.5rem">
          <FormLabel>Email Submissions to : </FormLabel>
          <InputGroup>
            <Input
              shadow="base"
              type="email"
              placeholder="you@example.com"
              isRequired={true}
              aria-describedby="email-helper-text"
              onChange={handleInputChange}
              name="email"
              value={data.email}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired marginTop="1.5rem">
          <FormLabel>Choose Fields : </FormLabel>
          {createInputs()}
          <Button
            colorScheme="orange"
            onClick={addClick}
            icon={<AiOutlinePlusCircle />}
          >
            {values.val.length > 0 ? "Add more fields" : "Add fields"}
          </Button>
        </FormControl>
        <HStack mt={8} justify="flex-end">
          <Button
            disabled={values.val.length === 0}
            type="submit"
            mr={3}
            colorScheme="orange"
            fontWeight="400"
            isLoading={buttonLoading}
          >
            Create
          </Button>
          <Button>Cancel</Button>
        </HStack>
      </form>
    </Box>
  )
}
