import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, addGuest } from '../redux/reducers/guests'

const Negative = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)
  const [value, setValue] = useState('')
  useEffect(() => {
    if (person.wishes !== '') {
      dispatch(addGuest(person))
    }
  }, [person])

  return (
    <div className="flex items-center justify-center shadow-lg mt-8 mx-8 mb-4 max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Мы понимаем, что обстоятельства бывают разные. Но нам бы хотелось, чтобы ты оставил нам
            свои пожелания
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Напишите ваше пожелание"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="w-full flex items-start md:w-full px-3">
            <div className="-mr-1">
              <button
                type="button"
                className="px-2 rounded-lg items-center bg-yellow-400  text-gray-800 font-regular uppercase border-yellow-500 border-t border-b border-r"
                onClick={() => {
                  dispatch(setState('wishes', value))
                }}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

Negative.propTypes = {}

export default Negative
