
import {useColorMode,Button, useColorModeValue,Text,IconButton, Box, HStack} from "@chakra-ui/react"
import {FaSun,FaMoon} from 'react-icons/fa'


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('red.500','green.200')
  return (
    <Box p={8}>
      <HStack> 
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'dark' ? <FaSun/> :<FaMoon/>}
      </IconButton>
  

      </HStack>
     
      <Text color={bg}>Test</Text>
      
      
    </Box>
  )

}

