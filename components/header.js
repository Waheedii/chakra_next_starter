import Links from "./Links"
import Logo from "./Logo"
import {VStack,IconButton,useColorMode, Flex,Box } from "@chakra-ui/react"
import {FaSun,FaMoon} from 'react-icons/fa'
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <>
    

    <Flex justifyContent="space-between" p="4">
      <Logo/> 
    <Links/>
    <IconButton onClick={toggleColorMode} _focus={{outline:"none"}} isRound="lg">
      {colorMode === 'dark' ? <FaSun/> :<FaMoon/>}
    </IconButton>
  
    </Flex>
 
    </>
  )
};

