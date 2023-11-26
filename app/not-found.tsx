'use client'

import { Box, Text, Heading, Image } from "@chakra-ui/react"
import Link from "next/link"

export default function Custom404() {
  return (
    <Box height={'100vh'} width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box justifyContent={'center'} alignItems={'center'} textAlign={'center'} width={'100%'} maxW={'500px'}>
        <Heading as={'h4'} size={'md'}>Ngodingbentar</Heading>
        <Box>
          <Image src={'/404.svg'} alt={'404'} />
        </Box>
        <Link href={'/'} style={{ color: 'blue' }} >Back to Home</Link>
      </Box>
    </Box>
  )
}