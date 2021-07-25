import NextLink from 'next/link'
import {Box, Flex,Button} from "@chakra-ui/react"
function Home() {
  return (
      <>
    <Box borderBottom="2px">

      <NextLink href="/" passHref>
          <Button as="a" variant="ghost">Home</Button>
        </NextLink>
    <NextLink href="/about" passHref>
          <Button as="a" variant="ghost">About Us</Button>
          </NextLink>
        <NextLink href="/blog/hello-world" passHref>
      <Button as="a" variant="ghost">Blog Post</Button>
      </NextLink>
          </Box>
          
      
    </>
  )
}

export default Home