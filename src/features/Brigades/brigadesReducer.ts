import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrigadeType, FilterType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { brigadesApi } from './brigadesApi'
import { errorNetworkUtil } from '../../common/utils/errorNetworkUtil'
import { AppRootStateType } from '../../app/store'

const initialState = {
  brigades: [] as BrigadeType[],
  filter: {
    connectionStateId: null,
    departmentId: null,
  } as FilterType,
  viewBrigades: [] as BrigadeType[],
}
export const brigadesSlice = createSlice({
  name: 'brigades',
  initialState: initialState,
  reducers: {
    setBrigades: (state, action: PayloadAction<{ brigades: BrigadeType[] }>) => {
      state.brigades = action.payload.brigades
    },
    setFilterDepartment: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = {
        ...state.filter,
        // connectionStateId: action.payload.filter.connectionStateId,
        departmentId: action.payload.filter.departmentId,
      }
    },
    setFilterConnection: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = {
        ...state.filter,
        connectionStateId: action.payload.filter.connectionStateId,
      }
    },
  },
})

export const { setBrigades, setFilterDepartment, setFilterConnection } = brigadesSlice.actions
export const brigadesReducer = brigadesSlice.reducer

export const getBrigades = createAsyncThunk('brigades/getBrigades', async (_, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    let { data } = await brigadesApi.getBrigades()

    dispatch(setBrigades({ brigades: data }))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorNetworkUtil(dispatch, e)
  }
})

export const getFilteredBrigades = createAsyncThunk(
  'brigades/getFilteredBrigades',
  async (_, { dispatch, getState }) => {
    const state = getState() as AppRootStateType
    const filter = state.brigades.filter
    dispatch(setAppStatus('loading'))
    try {
      let { data } = await brigadesApi.getBrigades()
      if (typeof filter.departmentId != 'number') {
      } else {
        data = data.filter((el) => el.department.id === filter.departmentId)
      }
      if (typeof filter.connectionStateId != 'number') {
      } else {
        data = data.filter((el) => el.connectionStateId === filter.connectionStateId)
      }
      dispatch(setBrigades({ brigades: data }))

      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)
