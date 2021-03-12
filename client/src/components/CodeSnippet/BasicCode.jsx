import { Text } from "@chakra-ui/layout"

export default function BasicCode({ url }) {
  const c = {
    pink: "#FF79AA",
    green: "#62E478",
    light: "#E7DE79",
    text: "#DBD7E0",
  }
  return (
    <code>
      <Text color={c.text}>
        &lt;<span style={{ color: c.pink }}>form </span>
        <span style={{ color: c.green }}>action="{url}"</span>
        &nbsp;<span style={{ color: c.light }}>method="POST"</span>&gt;
      </Text>
      <Text color={c.text}>
        &nbsp;&nbsp;&lt;
        <span style={{ color: c.green }}>input type="text"</span>{" "}
        <span style={{ color: c.light }}>name="name"</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;
        <span style={{ color: c.green }}>input type="email"</span>
        <span style={{ color: c.light }}>name="email"</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;
        <span style={{ color: c.green }}>button type="submit"&gt;</span>
        Send<span style={{ color: c.green }}>&lt;/button&gt;</span>
        <br />
      </Text>
      <Text color={c.pink}>&lt;/form&gt;</Text>
    </code>
  )
}
