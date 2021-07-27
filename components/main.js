import {Text,Box,VStack,SimpleGrid, Flex,Progress,Heading} from "@chakra-ui/react"
import SkillsTable from './skillsTable'
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im"
export default function main() {
  return(
    <>
    <Heading display="flex" justifyContent="center" gridGap="4" fontFamily="cursive" mt="-16" mb="10" fontSize="lg">
          <ImQuotesLeft/>Turn your ideas into reality<ImQuotesRight/>
          </Heading>
  <SimpleGrid columns={[1, 1, 2]} spacing="40px">
  <Box>
    <Heading size={["md","lg","2xl"]} textAlign="center">About</Heading>
    <Text textAlign="center">im a full stack web developer with 6 years of experience</Text>
  </Box>
  <Box>
  <Text display="flex" justifyContent="center" size="md">Expertise</Text>
   <SkillsTable/>
  </Box>
  
</SimpleGrid>
     </>
          
  )
};
