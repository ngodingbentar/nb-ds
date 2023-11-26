'use client';

import {
  Box,
  Text,
} from '@chakra-ui/react'

interface IProps {
  title: string
  item: string | number
}

const UserItem = ({ title, item }: IProps) => {
  return (
    <Box display={'flex'}>
      <Text width={'40%'}>{title}</Text>
      <Text width={'60%'}>: {item}</Text>
    </Box>
  )
}

export default UserItem