import React from 'react'

const Map = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className=" min-w-100 max-w-screen-sm h-70 bg-yellow-100 min-w-100 w-4/5 h-200 rounded overflow-hidden mx-2 my-2">
        <div className="p-4 text-gray-800 text-lg">
          <h1 className="font-bold text-gray-800 text-lg"> АДРЕС ЗАГСА </h1>
          <p className="font-regular text-gray-800 text-lg">
            Дворец бракосочетания №3, г.Пушкин, Садовая ул.22
          </p>
        </div>
        <div className="px-4 pt-2 pb-2 text-gray-800 text-lg">
          <h1 className="font-bold text-gray-800 text-lg"> АДРЕС РЕСТОРАНА</h1>
          <p className="font-regular text-gray-800 text-lg"> сообщим вам позже...</p>
        </div>
        <div className="h-70 w-full object-cover object-center flex justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2012.1783626989602!2d30.408672915948976!3d59.71322523722458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469621ab36d4930d%3A0x2472851ea4c33895!2sDvorets%20Brakosochetaniya%203!5e0!3m2!1sen!2skz!4v1593843586041!5m2!1sen!2skz"
            title="map"
            width="600"
            height="200"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
          />
        </div>
      </div>
    </div>
  )
}

Map.propTypes = {}

export default Map
