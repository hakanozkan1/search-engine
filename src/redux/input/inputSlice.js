import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputChange: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { inputChange } = inputSlice.actions

export default inputSlice.reducer