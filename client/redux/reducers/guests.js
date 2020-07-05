import axios from 'axios'

const SET_STATE = 'SET_STATE'
const ADDED_GUEST = 'ADDED_GUEST'
const GET_GUESTS = 'GET_GUESTS'

const initialState = {
  person: {
    name: '',
    answer: '',
    wishes: '',
    food: '',
    drink: '',
    transport: '',
    phone: ''
  },
  guests: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, person: { ...state.person, [action.field]: action.data } }
    case ADDED_GUEST:
      return {
        ...state,
        person: action.person
      }
    case GET_GUESTS:
      return {
        ...state,
        guests: action.guests
      }
    default:
      return state
  }
}

export function setState(field, data) {
  return { type: SET_STATE, field, data }
}

export function addGuest(person) {
  fetch('api/v1/persons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  })
  return { type: ADDED_GUEST, person }
}

export function getGuests() {
  return async (dispatch) => {
    await axios('/api/v1/persons').then(({ data }) => {
      dispatch({ type: GET_GUESTS, guests: data })
    })
  }
}
