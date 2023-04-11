import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrigadeType, FilterType } from '../../../common/types'
import { setAppStatus } from '../../../app/appSlice'
import { brigadesApi } from '../api/brigadesApi'
import { errorNetworkUtil } from '../../../common/utils/errorNetworkUtil'
import { AppRootStateType } from '../../../app/store'

const initialState = {
  brigades: [] as BrigadeType[],
  filter: {
    connectionStateId: null,
    departmentId: null,
  } as FilterType,
  filteredBrigades: [] as BrigadeType[],
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
        departmentId: action.payload.filter.departmentId,
      }
    },
    setFilterConnection: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = {
        ...state.filter,
        connectionStateId: action.payload.filter.connectionStateId,
      }
    },
    setFilteredBrigades: (state, action: PayloadAction<{ filteredBrigades: BrigadeType[] }>) => {
      state.filteredBrigades = action.payload.filteredBrigades
    },
  },
})

export const { setBrigades, setFilterDepartment, setFilterConnection, setFilteredBrigades } =
  brigadesSlice.actions
export const brigadesReducer = brigadesSlice.reducer

export const getBrigades = createAsyncThunk('brigades/getBrigades', async (_, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    let { data } = await brigadesApi.getBrigades()

    dispatch(setBrigades({ brigades: data }))
    dispatch(setFilteredBrigades({ filteredBrigades: data }))
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
    const brigades = state.brigades.brigades
    let filteredBrigades = brigades
    dispatch(setAppStatus('loading'))
    try {
      // let { data } = await brigadesApi.getBrigades()
      if (filter.departmentId) {
        filteredBrigades = brigades.filter((el) => el.department.id === filter.departmentId)
      }
      if (filter.connectionStateId) {
        filteredBrigades = filteredBrigades.filter(
          (el) => el.connectionStateId === filter.connectionStateId
        )
      }
      dispatch(setFilteredBrigades({ filteredBrigades }))

      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)
