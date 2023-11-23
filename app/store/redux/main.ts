import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    loading: false,
    isCollapsed: false,
  },
  reducers: {
    setLoading: (state, action) => {
      console.log('setLoading main', action.payload)
      state.loading = action.payload
    },
    setIsCollapsed: (state, action) => {
      console.log('setIsCollapsed main')
      state.isCollapsed = !state.isCollapsed
    }
  }
})

export const { setLoading, setIsCollapsed } = mainSlice.actions
export default mainSlice.reducer