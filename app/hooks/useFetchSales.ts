import axios from "axios"
import { useQuery } from "react-query"

export const useFetchSales = () => {
  return useQuery({
    queryKey: ['sales'],
    queryFn: async () => {
      const userRes = await axios.get('/api')
      return userRes.data.data
    },
  })
}