import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, addGuest } from '../redux/reducers/guests'

const Negative = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)
  const [value, setValue] = useState('')
  return (
    <div>
      <p>So sorry</p>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          dispatch(setState('wishes', value))
          dispatch(addGuest(person))
        }}
      >
        Ok
      </button>
    </div>
  )
}

Negative.propTypes = {}

export default Negative
