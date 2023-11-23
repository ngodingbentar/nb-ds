import { searchUser } from "@/app/api/users"
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: '',
    user: {},
  },
  reducers: {
    setUsers: (state, action) => {
      if(action.payload.length === 0) {
        state.error = 'User not found'
      } else {
        state.error = ''
      }
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setUser: (state, action) => {
      console.log('setUser', action.payload)
      state.user = action.payload
    }
  }
})

export const { setUsers, setLoading, setUser } = userSlice.actions
export default userSlice.reducer