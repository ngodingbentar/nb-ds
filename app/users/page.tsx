'use client'
import axios from "axios";
import { useQuery } from "react-query";

const UserPage = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const userRes = await axios.get('/api/users')
      return userRes.data.data
    }
  })

  return (
    <div>
      <button>Users</button>
      {isLoading && <div>Loading</div>}
      {!isLoading && data?.map((user: any) => {
        return (
          <div key={user.id}>
            {user.name}
          </div>
        )
      })}
    </div>
  )
};

export default UserPage;
