import { instance } from '../../common/constants/instance'
import { BrigadeType } from '../../common/types'

export const brigadesApi = {
  getBrigades() {
    return instance.get<BrigadeType[]>(`getBrigadesData`)
  },
}
