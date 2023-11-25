import axios from "axios"
import { useQuery } from "react-query"
import { useToast } from '@chakra-ui/react'

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const userRes = await axios.get('/api/users')
      return userRes.data.data
    },
  })
}

export const useFetchDetailUser = (id: string) => {
  const toast = useToast()

  return useQuery({
    queryKey: ['user-detail'],
    enabled: false,
    queryFn: async () => {
      const userRes = await axios.get(`/api/users/${id}`)
      if(userRes.data.data === null) {
        toast({
          title: 'Account not found.',
          description: "We can't find your account.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
      else {
        toast({
          title: 'Account found.',
          description: "We've found your account.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
      return userRes.data.data
    },
  })
}