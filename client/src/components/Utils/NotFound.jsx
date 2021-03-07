import Empty from "./Empty"
import { AiOutlineWarning } from "react-icons/ai"

export default function NotFound() {
  return (
    <Empty
      icon={AiOutlineWarning}
      text="Requested resource was not found on this website."
      code="404"
    />
  )
}
