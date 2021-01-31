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
} from "@chakra-ui/react";
const c = {
  pink: "#FF79AA",
  green: "#62E478",
  light: "#E7DE79",
  text: "#DBD7E0",
};
const CodeSnippet = () => {
  return (
    <Box borderRadius="13px" maxW="65ch" margin="3rem auto">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Basic</Tab>
          <Tab>Fetch</Tab>
        </TabList>
        <TabPanels fontSize="1.2rem" border="1px solid #eee">
          <TabPanel textAlign="left" backgroundColor="#011627">
            <code>
              <Text color={c.text}>
                &lt;<span style={{ color: c.pink }}>form </span>
                <span style={{ color: c.green }}>action="{"endpoint"}"</span>
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
  );
};

export default CodeSnippet;
