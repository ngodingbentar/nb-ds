import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    loading: false,
    isCollapsed: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setIsCollapsed: (state, action) => {
      state.isCollapsed = !state.isCollapsed
    }
  }
})

export const { setLoading, setIsCollapsed } = mainSlice.actions
export default mainSlice.reducer