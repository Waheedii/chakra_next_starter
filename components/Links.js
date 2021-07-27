import NextLink from 'next/link'
import {Box, Flex,Button,transition,} from "@chakra-ui/react"
import {FcHome,FcAbout,FcBusinessContact} from "react-icons/fc"
function Home() {
  return (
      <>
    <Box shadow="dark-lg"  rounded="full">

      <NextLink href="/" passHref>
          <Button as="a" rounded="2xl" colorScheme="teal" fontSize="md"  _focus={{outline:"none"}} leftIcon={<FcHome/>} variant="ghost">Home</Button>
        </NextLink>
    <NextLink href="/about" passHref>
          <Button as="a"  rounded="2xl" colorScheme="teal"  _focus={{outline:"none"}} leftIcon={<FcAbout/>} variant="ghost">About Us </Button>
          </NextLink>
        <NextLink href="/blog/hello-world" passHref>
      <Button as="a"  rounded="2xl" colorScheme="teal"  transition="ease" _focus={{outline:"none"}} leftIcon={<FcBusinessContact/>} variant="ghost">Hire me</Button>
      </NextLink>
          </Box>
          
    
    </>
  )
}

export default Home