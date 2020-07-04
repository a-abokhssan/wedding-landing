import React from 'react'

const First = () => {
  return (
    <div>
      <h2 className="flex justify-center sce">Свадьба Амира и Анны</h2>
      <hr className="gradient" />
      <nav className="bg-white px-8 pt-2">
        <div className="flex justify-center">
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-base py-3 mr-8"
            href="#invitation"
          >
            Главное
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-base py-3 mr-8"
            href="#"
          >
            Наши пожелания
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-base py-3 mr-8"
            href="#"
          >
            Информация о событии
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-base py-3 mr-8"
            href="#"
          >
            Ваш ответ
          </a>
        </div>
      </nav>
      <div className="flex flex-col">
        <img src="images/we.png" alt="sdsd" className="w-full object-cover object-center" />
        <h2 className="flex justify-center sce">ВЕЧЕРИНКА ПО ЛЮБВИ</h2>
        <p className="text-2xl px-32 text-center">
          Мы решили обойтись без бумажных приглашений и создать для вашего удобства сайт, на котором
          вы сможете ознакомиться со всем, что касается нашей свадьбы:
        </p>
      </div>
    </div>
  )
}

First.propTypes = {}

export default First
