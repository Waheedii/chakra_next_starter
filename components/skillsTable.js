import {Table,Thead,Tr,Tbody,Td,Progress,Text} from "@chakra-ui/react"

export default function skillsTable(params) {
  return(
    <Table variant="striped" w={["130","150","150"]}>
  <Thead>
   
  </Thead>
  <Tbody>
    <Tr>
      <Td>Javascript</Td>
      <Td><Progress rounded="2xl" shadow="dark-lg" value={85}/></Td>
      <Td isNumeric>85</Td>
    </Tr>
    <Tr>
      <Td>Css</Td>
      <Td><Progress rounded="2xl" shadow="dark-lg" value={70}/></Td>
      <Td isNumeric>70</Td>
    </Tr>
    <Tr>
      <Td>React/Next js</Td>
      <Td><Progress rounded="2xl" w="20rem" shadow="dark-lg" value={80}/></Td>
      <Td isNumeric>80</Td>
    </Tr>
    <Tr>
      <Td>Node/Express</Td>
      <Td><Progress rounded="2xl" shadow="dark-lg" value={90}/></Td>
      <Td isNumeric>90</Td>
    </Tr>
    <Tr>
      <Td>Googling</Td>
      <Td><Progress rounded="2xl" shadow="dark-lg" value={100}/></Td>
      <Td isNumeric>100</Td>
    </Tr>
  </Tbody>
</Table>
  )
};

