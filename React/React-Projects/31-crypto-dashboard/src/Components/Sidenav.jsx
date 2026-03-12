import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { MdDashboard } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"

const Sidenav = () => {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ]

  return (
    <Stack boxShadow="lg" maxW="16rem" h="100vh" >
        <Heading textAlign="center" fontSize="30px" pt="3.5rem" as="h1">Alice Code</Heading>
     <Box mt="6" mx="3">
          {navLinks.map((nav) => (
        <HStack  key={nav.text}>
          <Icon as={nav.icon} />
          <Text>{nav.text}</Text>
        </HStack>
      ))}
     </Box>
    </Stack>
  )
}

export default Sidenav 