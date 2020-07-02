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
            ? 'flex px-6 py-2 rounded-full bg-orange-300 border border-orange-600 items-center'
            : 'hidden'
        }`}
      >
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          type="button"
          /* !{value} ? '' : 'disabled' */
          onClick={() => {
            dispatch(setState('name', value))
          }}
        >
          Ok
        </button>
      </div>
      <div
        className={`${
          person.answer === ''
            ? 'flex px-6 py-2 rounded-full bg-orange-300 border border-orange-600 items-center'
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
            ? 'flex px-6 py-2 rounded-full bg-orange-300 border border-orange-600 items-center'
            : 'hidden'
        }`}
      >
        <Pozitive />
      </div>
      <div
        className={`${
          person.answer === 'No'
            ? 'flex px-6 py-2 rounded-full bg-orange-300 border border-orange-600 items-center'
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
