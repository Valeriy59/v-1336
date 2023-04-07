export type BrigadeType = {
  id: number
  brigade_name: string
  connectionStateId: number
  department: {
    id: number
  }
  position: {
    field: string
    cluster: number
    well: number
  }
}

export type DepartmentType = {
  id: number
  name: string
}

export type ConnectionStateType = {
  connectionStateId: number
  name: string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
