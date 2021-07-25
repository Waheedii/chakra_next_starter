import Links from "./Links"
import Logo from "./Logo"
import {VStack,IconButton,useColorMode, Flex} from "@chakra-ui/react"
import {FaSun,FaMoon} from 'react-icons/fa'
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <>
    <Flex justifyContent="space-between">
      <Logo/> 
    <Links/>
    <IconButton onClick={toggleColorMode} isRound="lg">
      {colorMode === 'dark' ? <FaSun/> :<FaMoon/>}
    </IconButton>
  
    </Flex>
    </>
  )
};

