import { Stack } from "@chakra-ui/react"

import { CreateFormForm, DashboardHeader } from "."
import SEO from "../SEO/SEO"

export default function CreateNewForm() {
  return (
    <>
      <SEO
        title="Create new form | Formify"
        description="Create new form endpoint and paste in your application to receive submissions."
      />
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
