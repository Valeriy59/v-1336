import { instance } from '../../common/constants/instance'
import { ConnectionStateType } from '../../common/types'

export const connectionStatesApi = {
  getConnectionStates() {
    return instance.get<ConnectionStateType[]>(`getConnectionState`)
  },
}
