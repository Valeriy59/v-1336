import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RequestStatusType } from '../common/types'

const initialState = {
  status: 'idle',
  message: null as string | null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppMessage(state, action: PayloadAction<string | null>) {
      state.message = action.payload
    },
    setAppStatus(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload
    },
  },
})
export const { setAppMessage, setAppStatus } = appSlice.actions
export const appReducer = appSlice.reducer
