import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState, addGuest } from '../redux/reducers/guests'

const Pozitive = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)

  return (
    <div>
      <p>{person.name}, thank you for coming. Please answer for questions.</p>
      <div>
        <p>Сhoose your drink</p>
        <label htmlFor="meat">Meat</label>
        <input
          type="checkbox"
          id="meat"
          name="meat"
          onClick={() => {
            dispatch(setState('food', 'Meat'))
          }}
        />
        <label htmlFor="fish">Fish</label>
        <input
          type="checkbox"
          id="fish"
          name="fish"
          onClick={() => {
            dispatch(setState('food', 'Fish'))
          }}
        />
        <label htmlFor="chicken">Chicken</label>
        <input
          type="checkbox"
          id="chicken"
          name="chicken"
          onClick={() => {
            dispatch(setState('food', 'Chicken'))
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(addGuest(person))
        }}
      >
        ok
        </button>
    </div>
  )
}

Pozitive.propTypes = {}

export default Pozitive
