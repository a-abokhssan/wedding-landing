import React from 'react'
import Invitation from './invitation'
import First from './first-display'
import About from './about'

const Home = () => {
  return (
    <div>
      <First />
      <About />
      <Invitation />
    </div>
  )
}

Home.propTypes = {}

export default Home
