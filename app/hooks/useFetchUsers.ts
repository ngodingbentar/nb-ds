import axios from "axios"
import { useQuery } from "react-query"
import { useToast } from '@chakra-ui/react'
import { IUser } from "../types/main"
import { useDispatch } from 'react-redux'
import { setUserStore } from "../store/redux/users"

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

export const useSearchUser = (email: string) => {
  const toast = useToast()
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['search-user'],
    enabled: false,
    cacheTime: 0,
    queryFn: async () => {
      const userRes = await axios.get('/api/users')
      const result = userRes.data.data.find((user: IUser) => user.email.toLowerCase() === email.toLowerCase())
      return result
    },
    onSuccess: (data) => {
      if (data) {
        dispatch(setUserStore(data))
        toast({
          title: 'Account found',
          description: "We've found your account.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      } else {
        toast({
          title: 'Account not found',
          description: "We can't find your account.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
    },
  })
}

interface IData {
  name: string
  email: string
}
export const useAddUser = (data: IData) => {
  const toast = useToast()

  return useQuery({
    queryKey: ['add-user'],
    enabled: false,
    cacheTime: 0,
    queryFn: async () => {
      const userRes = await axios.post(`/api/users`, data)
      return userRes.data.data
    },
    onSuccess: () => {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    },
    onError: () => {
      toast({
        title: 'Account not created.',
        description: 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
  })
}