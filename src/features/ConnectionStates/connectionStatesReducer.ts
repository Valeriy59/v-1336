import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConnectionStateType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { errorNetworkUtil } from '../../common/utils/errorNetworkUtil'
import { connectionStatesApi } from './connectionStatesApi'

const initialState = {
  connectionStates: [] as ConnectionStateType[],
}
export const connectionStatesSlice = createSlice({
  name: 'connectionStates',
  initialState: initialState,
  reducers: {
    setConnectionStates: (
      state,
      action: PayloadAction<{ connectionStates: ConnectionStateType[] }>
    ) => {
      state.connectionStates = action.payload.connectionStates
    },
  },
})

export const { setConnectionStates } = connectionStatesSlice.actions
export const connectionStatesReducer = connectionStatesSlice.reducer

export const getConnectionStates = createAsyncThunk(
  'connectionStates/getConnectionStates',
  async (_, { dispatch }) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await connectionStatesApi.getConnectionStates()

      dispatch(setConnectionStates({ connectionStates: res.data }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)
