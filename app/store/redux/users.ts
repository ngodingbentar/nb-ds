import { searchUser } from "@/app/api/users"
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: '',
    userStore: {},
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
    setUserStore: (state, action) => {
      state.userStore = action.payload
    }
  }
})

export const { setUsers, setLoading, setUserStore } = userSlice.actions
export default userSlice.reducer