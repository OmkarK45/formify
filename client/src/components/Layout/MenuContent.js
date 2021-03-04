import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function MenuLink({ link, title }) {
  return (
    <>
      <Link to={link}>
        <Text fontSize="lg" padding="0.6rem 0">
          {title}
        </Text>
      </Link>
    </>
  )
}
