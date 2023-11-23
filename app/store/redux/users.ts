import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: '',
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
      console.log('setLoading', action.payload)
      state.loading = action.payload
    }
  }
})

export const { setUsers, setLoading } = userSlice.actions
export default userSlice.reducer