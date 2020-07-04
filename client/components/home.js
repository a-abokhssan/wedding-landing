import React from 'react'
import Invitation from './invitation'
import About from './about'
import Map from './map'
import Contacts from './contacts'
import FirstPage from './first-page'

// import CompTest from './comp-test'

const Home = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-gray-200 max-w-screen-lg">
        <FirstPage />
        <About />
        <Map />
        <Invitation />
        {/* <CompTest /> */}
        <Contacts />
      </div>
    </div>

  )
}

Home.propTypes = {}

export default Home
