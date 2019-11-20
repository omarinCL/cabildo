export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const EDIT = 'EDIT'
export const FILTER = 'FILTER'

export const onAdd = item => ({ type: ADD, payload: item })

export const onRemove = id => ({ type: REMOVE, payload: id })

export const onEdit = item => ({ type: EDIT, payload: item })

export const onFilter = searchTerm => ({ type: FILTER, payload: searchTerm })
