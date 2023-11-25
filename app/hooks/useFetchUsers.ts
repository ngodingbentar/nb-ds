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

export const useDeleteUser = (id: string) => {
  const toast = useToast()

  return useQuery({
    queryKey: ['delete-user', id],
    enabled: false,
    cacheTime: 0,
    queryFn: async () => {
      const userRes = await axios.delete(`/api/users/${id}`)
      return userRes.data.message
    },
    onSuccess: () => {
      toast({
        title: 'Account deleted',
        description: "We've deleted your account.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    },
    onError: () => {
      toast({
        title: 'Account not found',
        description: "We can't find your account.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
  })
}