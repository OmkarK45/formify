import Empty from "./Empty"
import { AiOutlineWarning } from "react-icons/ai"
import SEO from "../SEO/SEO"

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found | Formify" />
      <Empty
        icon={AiOutlineWarning}
        text="Requested resource was not found on this website."
        code="404"
      />
    </>
  )
}
