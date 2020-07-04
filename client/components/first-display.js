import React from 'react'

const First = () => {
  return (
    <div>
      <h2 className="flex justify-center text text-lg sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
        Свадьба Амира и Анны
      </h2>
      <hr className="gradient" />
      <nav className="bg-white px-8 pt-1">
        <div className="flex justify-center">
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-xs sm:text-sm md:text-sm lg:text-base xl:text-base py-3 mr-8"
            href="#invitation"
          >
            Главное
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-xs sm:text-sm md:text-sm lg:text-base xl:text-base py-3 mr-8 hover:text-red-400"
            href="#"
          >
            Наши пожелания
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-xs sm:text-sm md:text-sm lg:text-base xl:text-base py-3 mr-8"
            href="#"
          >
            Информация о событии
          </a>
          <a
            className="no-underline text-grey-dark uppercase tracking-wide font-normal text-xs sm:text-sm md:text-sm lg:text-base xl:text-base py-3 mr-8"
            href="#"
          >
            Ваш ответ
          </a>
        </div>
      </nav>
      <div className="flex flex-col">
        <img
          src="images/we.png"
          alt="This is us"
          className="w-full object-cover object-center pt-2"
        />
        <h2 className="flex justify-center text text-base sm:text-xl md:text-xl lg:text-3xl xl:text-3xl">
          ВЕЧЕРИНКА ПО ЛЮБВИ
        </h2>
        <p className="text-sm sm:text-base md:text-base lg:text-2xl xl:text-2xl px-32 text-center">
          Мы решили обойтись без бумажных приглашений и создать для вашего удобства сайт, на котором
          вы сможете ознакомиться со всем, что касается нашей свадьбы:)
        </p>
      </div>
    </div>
  )
}

First.propTypes = {}

export default First
