import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../redux/reducers/guests'
import Pozitive from './pozitive-answer'
import Negative from './negative-answer'

const Invitation = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)
  const [value, setValue] = useState('')

  return (
    <div>
      <div
        className={`${
          person.name === ''
          ? 'flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 rounded max-w-xs'
            : 'hidden'
        }`}
      >
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            dispatch(setState('name', value))
          }}
        >
          Ok
        </button>
      </div>
      <div
        className={`${
          person.answer === '' && person.name !== ''
          ? 'flex justify-between bg-blue-500 hover:bg-blue-700 font-bold py-2 px-2 rounded max-w-xs'
            : 'hidden'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            dispatch(setState('answer', 'Yes'))
          }}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(setState('answer', 'No'))
          }}
        >
          No
        </button>
      </div>
      <div
        className={`${
          person.answer === 'Yes'
            ? 'flex justify-between bg-blue-500 hover:bg-blue-700 font-bold py-2 px-2 rounded max-w-xs'
            : 'hidden'
        }`}
      >
        <Pozitive />
      </div>
      <div
        className={`${
          person.answer === 'No'
            ? 'flex justify-between bg-blue-500 hover:bg-blue-700 font-bold py-2 px-2 rounded max-w-xs'
            : 'hidden'
        }`}
      >
        <Negative />
      </div>
    </div>
  )
}

Invitation.propTypes = {}

export default Invitation
