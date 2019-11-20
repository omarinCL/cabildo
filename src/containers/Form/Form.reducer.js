import { ADD, EDIT, REMOVE, FILTER } from './Form.actions'
import uuid from 'uuid/v4'

const initialState = {
  list: [
    {
      id: '97e1ada5-8726-4ab9-847e-9206d61014b8',
      nombre: 'Orlando',
      apellido: 'Marin',
      email: 'orlando.marin@chilecompra.cl',
      edad: '31',
      comentarios: 'Chapalapachala'
    },
    {
      id: '28ab7df6-4027-41a2-b86f-83785c59117d',
      nombre: 'Rodrigo',
      apellido: 'Marin',
      email: 'rodrigo.marin@chilecompra.cl',
      edad: '35',
      comentarios: 'Chepelepechele'
    }
  ],
  filteredList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      action.payload.id = uuid()
      return { ...state, list: [...state.list, action.payload] }
    }
    case REMOVE: {
      const filteredArray = state.list.filter(item => item.id !== action.payload)
      return { ...state, list: [...filteredArray] }
    }
    case EDIT: {
      const modifiedArray = state.list.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        } else return item
      })
      return { ...state, list: [...modifiedArray] }
    }
    case FILTER:
      return {
        ...state,
        filteredList: action.payload ? state.list.filter(item => {
          if (
            item.nombre.includes(action.payload) ||
            item.apellido.includes(action.payload) ||
            item.email.includes(action.payload) ||
            item.edad.includes(action.payload) ||
            item.comentarios.includes(action.payload)
          ) {
            return true
          } else {
            return false
          }
        }) : []
      }
    default:
      return state
  }
}
