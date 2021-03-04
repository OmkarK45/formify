import { Heading, Stack } from "@chakra-ui/react"
import { useState } from "react"
import CreateFormForm from "./CreateFormForm"
import DashboardHeader from "./DashboardHeader"

export default function CreateNewForm() {
  const [data, setData] = useState({
    formName: "",
    email: "",
    description: "",
    // This needs some work
    fields: [],
  })
  const [fields, setFields] = useState([])

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  console.log("in parent", fields)
  return (
    <>
      <DashboardHeader title="Create new form" />
      <Stack
        maxW={["95%", "90%", "80%"]}
        mx="auto"
        mt={["0.4rem", "0.7rem", "1rem"]}
      >
        <CreateFormForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
          stFields={setFields}
          fields={fields}
        />
      </Stack>
    </>
  )
}
