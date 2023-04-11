import { instance } from '../../../common/constants/instance'
import { DepartmentType } from '../../../common/types'

export const departmentsApi = {
  getDepartments() {
    return instance.get<DepartmentType[]>(`getDepartments`)
  },
}
