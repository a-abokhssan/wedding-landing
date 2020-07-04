import React from 'react'

const Contacts = () => {
  return (
    <div className="flex flex-wrap justify-center pt-20 py-20">
      <div className=" min-w-100 max-w-screen-sm h-70 bg-yellow-100 min-w-100 w-4/5 h-200 rounded overflow-hidden mx-2 my-2">
        <div className="p-4 text-gray-800 text-lg">
          <h1 className="font-bold text-gray-800 text-lg"> Звоните нам</h1>
          <p className="font-regular text-gray-800 text-lg">
            89052752432 Анна <br />
            89117267723 Амир
          </p>
        </div>
      </div>
    </div>
  )
}

Contacts.propTypes = {}

export default Contacts
