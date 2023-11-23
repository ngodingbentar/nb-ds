import axios from "axios"
import { useQuery } from "react-query"

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const userRes = await axios.get('/api/users')
      return userRes.data.data
    },
  })
}