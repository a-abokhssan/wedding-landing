import React from 'react'

const FirstPage = () => {
  return (
    <div className="flex float-none flex-col items-center justify-center pt-10 ">
      <h1 className="font-bold font-sans text-xl">СВАДЬБА АМИРА И АННЫ</h1>
      <img className="w-full object-cover object-center" alt="cart" src="images/main.png" />
      <div className="flex float-none flex-col items-center justify-center">
        <h1 className="font-bold font-sans text-xl pt-10">ВЕЧЕРИНКА ПО ЛЮБВИ</h1>
        <p>Мы решили обойтись без бумажных приглашений и создать для вашего удобства сайт, на котором вы сможете ознакомиться со всем, что касается нашей свадьбы</p>
    </div>
    </div>
  )
}

FirstPage.propTypes = {}

export default FirstPage
