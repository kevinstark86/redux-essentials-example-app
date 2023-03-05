import { createSlice } from '@reduxjs/toolkit'

const initalState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const userSlice = createSlice({
  name: 'users',
  initalState,
  reducers: {},
})

export default userSlice.reducer
