'use client'

import { Heading, Text, Box } from '@chakra-ui/react'
import { usePathname } from "next/navigation";

const HeaderComp = () => {
  const pathname = usePathname()

  function setHeader () {
    switch (pathname.slice(1)) {
      case 'users':
        return 'Users Data'
      case 'registration':
        return 'User registrasi'
      case 'search':
        return 'Search User'
      default:
        return 'Sales Dashboard'
    }
  }

  function setSubHeader () {
    switch (pathname.slice(1)) {
      case 'users':
        return 'List of Users Data'
      case 'registration':
        return 'Add new User'
      case 'search':
        return 'Search existing user'
      default:
        return 'List of Sales Data'
    }
  }

  return (
    <Box borderBottom='1px' paddingBottom='10px' paddingLeft='1rem'>
      <Heading as='h3' size='lg'>
        {setHeader()}
      </Heading>
      <Text fontSize='md' color='blue'>{setSubHeader()}</Text>
    </Box>
  )
}

export default HeaderComp