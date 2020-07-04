import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGuests } from '../redux/reducers/guests'

const Wishes = () => {
  const dispatch = useDispatch()
  const guests = useSelector((s) => s.guests.guests)
  useEffect(() => {
    dispatch(getGuests())
  }, [])

  return (
    <div className="flex flex-wrap float-none justify-center">
      <p className="w-full p-2 pt-10 items-center">На этой странице вы можете увидеть пожелания от всех гостей</p>
      {guests.map((it) => {
        return (
          <div
            key={it.id}
            className="max-w-sm h-70 rounded overflow-hidden shadow-lg mx-2 my-2"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-s mb-2">{it.wishes}</div>
              <div className="font-regular text-s mb-2">{it.name}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Wishes.propTypes = {}

export default Wishes
