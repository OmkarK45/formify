import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  Tab,
  Code,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
const c = {
  pink: "#FF79AA",
  green: "#62E478",
  light: "#E7DE79",
  text: "#DBD7E0",
}
const CodeSnippet = ({ url }) => {
  return (
    <Box borderRadius="13px" maxW="65ch">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>
            <AiFillHtml5 />
            &nbsp; Basic
          </Tab>
          <Tab>
            <SiJavascript />
            &nbsp; Fetch
          </Tab>
          <Tab>
            <FaReact />
            &nbsp; React
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel textAlign="left" backgroundColor="#011627">
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
          </TabPanel>
          <TabPanel>
            <p>Code Here</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default CodeSnippet
