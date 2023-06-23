import { createSlice } from '@reduxjs/toolkit'

interface CustomerState {
  isLogin: boolean
}

const initialState: CustomerState = {
  isLogin: false,
}

export const customer = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
})

export const { setIsLogin } = customer.actions
export default customer.reducer
