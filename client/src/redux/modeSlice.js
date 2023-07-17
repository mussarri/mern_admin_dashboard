import { createSlice } from '@reduxjs/toolkit'

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: "dark",
  },
  reducers: {
    setMode: (state) => {
      state.value = state.value === "dark" ? "light" : "dark"
    },
    

  },
})

export const { setMode } = modeSlice.actions

export default modeSlice.reducer