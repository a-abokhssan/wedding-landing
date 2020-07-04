import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState, addGuest } from '../redux/reducers/guests'

const Pozitive = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)
  const [value, setValue] = useState('')

  const guestChoice = [
    ['Chicken', 'Meat', 'Fish', 'I am vegeterian'],
    ['Whiskey', 'Vodka', 'Beer', 'I am not drink']
  ]
  return (
    <div className="flex items-center justify-center shadow-lg mt-8 mx-8 mb-4 max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Привет, {person.name}. Мы рады, что ты сможешь разделить с нами это радостное событие.
            Ответь пожалуйста на вопросы ниже, чтобы мы могли сделать твой вечер более комфортным
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p className="px-2 pt-2 font-light pb-2 text-gray-800 text-lg">
              {person.name}, добавь свой телефон, чтобы мы могли отправить тебе окончательное место
              проведения ужина{' '}
            </p>
            <input
              type="text"
              className="rounded-l-md px-2 shadow-md border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Введите ваш номер"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              className="px-2 rounded-r-md shadow-md items-center bg-yellow-400  text-gray-800 font-bold uppercase border-yellow-500 border-t border-b border-r"
              onClick={() => {
                dispatch(setState('phone', value))
              }}
            >
              Ok
            </button>
            <p className="pt-4 font-light pb-2 text-gray-800 text-lg"> Выбери предпочитаемую еду</p>
            {guestChoice[0].map((it) => {
              return (
                <div key={it}>
                  <input
                    className="px-2 rounded-r-md shadow-md items-center bg-yellow-400  text-gray-800 font-bold uppercase border-yellow-500 border-t border-b border-r"
                    type="checkbox"
                    id="food"
                    name="food"
                    onClick={() => {
                      dispatch(setState('food', it))
                    }}
                  />
                  {it}
                </div>
              )
            })}
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p className="font-light pb-2 text-gray-800 text-lg"> Выбери предпочитаемый алкоголь</p>
            {guestChoice[1].map((it) => {
              return (
                <div key={it}>
                  <input
                    type="checkbox"
                    id="drink"
                    name="drink"
                    onClick={() => {
                      dispatch(setState('drink', it))
                    }}
                  />
                  {it}
                </div>
              )
            })}
          </div>
          <div className="w-full flex items-start md:w-full px-3">
            <div className="-mr-1">
              <button
                type="button"
                className="px-2 rounded-md items-center bg-yellow-400  text-gray-800 font-regular border-yellow-500 border-t border-b border-r"
                onClick={() => {
                  dispatch(addGuest(person))
                }}
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

Pozitive.propTypes = {}

export default Pozitive
