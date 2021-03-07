import { Stack } from "@chakra-ui/react"

import { CreateFormForm, DashboardHeader } from "."

export default function CreateNewForm() {
  return (
    <>
      <DashboardHeader title="Create new form" />
      <Stack
        maxW={["95%", "90%", "80%"]}
        mx="auto"
        mt={["0.4rem", "0.7rem", "1rem"]}
      >
        <CreateFormForm />
      </Stack>
    </>
  )
}
