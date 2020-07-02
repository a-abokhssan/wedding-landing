const SET_STATE = 'SET_STATE'
const ADDED_GUEST = 'ADDED_GUEST'

const initialState = {
  person: {
    name: '',
    answer: '',
    wishes: '',
    food: '',
    drink: '',
    transport: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, person: { ...state.person, [action.field]: action.data } }
    case ADDED_GUEST:
      return {
        ...state,
        person: { name: '', answer: '', wishes: '', food: '', drink: '', transport: '' }
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
  return (dispatch) => {
    dispatch({ type: ADDED_GUEST })
  }
}
