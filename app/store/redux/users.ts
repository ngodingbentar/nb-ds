import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userStore: {},
  },
  reducers: {
    setUserStore: (state, action) => {
      state.userStore = action.payload
    }
  }
})

export const { setUserStore } = userSlice.actions
export default userSlice.reducer