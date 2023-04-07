import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrigadeType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { brigadesApi } from './brigadesApi'
import { errorNetworkUtil } from '../../common/utils/errorNetworkUtil'

const initialState = {
  brigades: [] as BrigadeType[],
}
export const brigadesSlice = createSlice({
  name: 'brigades',
  initialState: initialState,
  reducers: {
    setBrigades: (state, action: PayloadAction<{ brigades: BrigadeType[] }>) => {
      state.brigades = action.payload.brigades
    },
  },
})

export const { setBrigades } = brigadesSlice.actions
export const brigadesReducer = brigadesSlice.reducer

export const getBrigades = createAsyncThunk('brigades/getBrigades', async (_, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await brigadesApi.getBrigades()

    dispatch(setBrigades({ brigades: res.data }))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorNetworkUtil(dispatch, e)
  }
})
