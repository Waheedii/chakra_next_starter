import {useColorMode,Button, useColorModeValue,Text,IconButton, Box, VStack} from "@chakra-ui/react"
import Header from '../components/header'


export default function Home() {
  
  const bg = useColorModeValue('red.500','green.200')
  return (
    <Box p={8}>
     <Header/>
     </Box>
  )

}

