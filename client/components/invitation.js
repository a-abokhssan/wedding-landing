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
    <div className="flex justify-center py-10">
      <div className={`${person.name === '' ? 'm-2 flex flex-col h-12' : 'hidden'}`}>
        <p className="px-2 pt-2 pb-2 font-bold text-gray-800 text-lg">
          Нам ждать вас? Дайте нам знать, пройдя опрос ниже
        </p>
        <input
          type="text"
          className="rounded-t-lg shadow-md p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Введите ваше имя"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className="px-8 py-2 mb-20 rounded-b-lg items-center bg-yellow-400  text-gray-800 font-bold uppercase border-yellow-500 border-t border-b border-r"
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
            ? 'flex flex-col justify-center items-center py-8'
            : 'hidden'
        }`}
      >
        <h3 className="flex items-center justify-between">
          Привет, {value}. Ты придешь к нам на свадьбу?
        </h3>
        <div className="flex flex-row py-6">
          <button
            type="button"
            className="px-8 shadow-md rounded-l-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            onClick={() => {
              dispatch(setState('answer', 'Yes'))
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            onClick={() => {
              dispatch(setState('answer', 'No'))
            }}
          >
            No
          </button>
        </div>
      </div>
      <div className={`${person.answer === 'Yes' ? '' : 'hidden'}`}>
        <Pozitive />
      </div>
      <div className={`${person.answer === 'No' ? '' : 'hidden'}`}>
        <Negative />
      </div>
    </div>
  )
}

Invitation.propTypes = {}

export default Invitation
