import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DepartmentType } from '../../../common/types'
import { setAppStatus } from '../../../app/appSlice'
import { errorNetworkUtil } from '../../../common/utils/errorNetworkUtil'
import { departmentsApi } from '../api/departmentsApi'

const initialState = {
  departments: [] as DepartmentType[],
}
export const departmentslice = createSlice({
  name: 'departments',
  initialState: initialState,
  reducers: {
    setDepartments: (state, action: PayloadAction<{ departments: DepartmentType[] }>) => {
      state.departments = action.payload.departments
    },
  },
})

export const { setDepartments } = departmentslice.actions
export const departmentsReducer = departmentslice.reducer

export const getDepartments = createAsyncThunk(
  'departments/getDepartments',
  async (_, { dispatch }) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await departmentsApi.getDepartments()

      dispatch(setDepartments({ departments: res.data }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  }
)
