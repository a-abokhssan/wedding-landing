import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../redux/reducers/guests'
import Pozitive from './pozitive-answer'
import Negative from './negative-answer'

const Modal = () => {
  const dispatch = useDispatch()
  const person = useSelector((s) => s.guests.person)
  const [value, setValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(true)}
      >
        Пройдите опрос
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onKeyPress={() => setShowModal(false)}
            onClick={() => setShowModal(false)}
            role="button"
            tabIndex="0"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <div className="flex justify-center py-10">
                    <button
                      type="button"
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
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
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  )
}

Modal.propTypes = {}

export default Modal
