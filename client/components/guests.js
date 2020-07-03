import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGuests } from '../redux/reducers/guests'

const Guests = () => {
  const dispatch = useDispatch()
  const guests = useSelector((s) => s.guests.guests)
  useEffect(() => {
    dispatch(getGuests())
  }, [])

  return (
    <div>
      {guests.map((it) => {
        return (
          <div key={it}>
            {it.name}
            {it.food}
          </div>
        )
      })}
    </div>
  )
}

Guests.propTypes = {}

export default Guests
