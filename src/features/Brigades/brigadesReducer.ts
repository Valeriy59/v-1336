import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrigadeType, FilterType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { brigadesApi } from './brigadesApi'
import { errorNetworkUtil } from '../../common/utils/errorNetworkUtil'
import { AppRootStateType } from '../../app/store'

const initialState = {
  brigades: [] as BrigadeType[],
  filter: {
    connectionStateId: undefined,
    departmentId: undefined,
  } as FilterType,
}
export const brigadesSlice = createSlice({
  name: 'brigades',
  initialState: initialState,
  reducers: {
    setBrigades: (state, action: PayloadAction<{ brigades: BrigadeType[] }>) => {
      state.brigades = action.payload.brigades
    },
    setFilter: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = {
        ...state.filter,
        // connectionStateId: action.payload.filter.connectionStateId,
        departmentId: action.payload.filter.departmentId,
      }
    },
    setFilter1: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = {
        ...state.filter,
        connectionStateId: action.payload.filter.connectionStateId,
        // departmentId: action.payload.filter.departmentId,
      }
    },
    setFilteredByDepartment: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.brigades = state.brigades.filter(
        (el) => el.department.id === action.payload.filter.departmentId
      )
    },
    setFilteredByConnection: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.brigades = state.brigades.filter(
        (el) => el.connectionStateId === action.payload.filter.connectionStateId
      )
    },
  },
})

export const {
  setBrigades,
  setFilter,
  setFilter1,
  setFilteredByDepartment,
  setFilteredByConnection,
} = brigadesSlice.actions
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

export const getFilteredBrigades = createAsyncThunk(
  'brigades/getFilteredBrigades',
  async (_, { dispatch, getState }) => {
    const state = getState() as AppRootStateType
    const filter = state.brigades.filter
    dispatch(setAppStatus('loading'))
    try {
      const res = await brigadesApi.getBrigades()

      dispatch(setBrigades({ brigades: res.data }))
      dispatch(setFilteredByDepartment({ filter }))
      dispatch(setFilteredByConnection({ filter }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)

export const getFilteredBrigades1 = createAsyncThunk(
  'brigades/getFilteredBrigades',
  async (_, { dispatch, getState }) => {
    const state = getState() as AppRootStateType
    const filter = state.brigades.filter
    dispatch(setAppStatus('loading'))
    try {
      const res = await brigadesApi.getBrigades()

      dispatch(setBrigades({ brigades: res.data }))
      // dispatch(setFilteredByDepartment({ filter }))
      dispatch(setFilteredByConnection({ filter }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)
