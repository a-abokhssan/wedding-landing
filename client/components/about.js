import React from 'react'

const About = () => {
  const info = [
    {
      title: 'Dress code',
      img: 'images/gamma.png',
      description:
        'Мы будем очень признательны, если вы поддержите стиль нашего ужина и  для своих нарядов выберете цвета близкие к гамме нашего мероприятия, или останетесь верными классическим (не пёстрым) цветам.'
    },
    {
      title: 'Обратите внимание',
      img: 'images/take-note.jpg',
      description:
        'Мы очень любим детей, но нашем празднике не будет предусмотрено развлечений и удобств для них. Очень надеемся, что у вас будет возможность оставить малышей на этот вечер под присмотром и полностью погрузиться в атмосферу праздника вместе с нами. Мы понимаем, что некоторые из наших гостей хотели бы прийти на праздник со своей парой, но наш день мы предпочли разделить исключительно с самыми близкими нам людьми.Поэтому просим не обижаться, что мы пригласили вас без вашей половинки.'
    },
    {
      title: 'Формат мероприятия',
      img: 'images/transfer.jpg',
      description:
        'Наша свадьба будет проходить в формате камерного ужина, без ведущего, тамады и тд. Мы очень надеемся, что в этот вечер вы сможете отдохнуть и просто расслабиться. Если во время ужина у вас появится желание сказать поздравительные слова - не стесняйтесь, нам это будет очень приятно!) '
    },
    {
      title: 'Передвижение',
      img: 'images/format.jpg',
      description:
        'От Дворца бракосочетания до места ужина будет организован трансфер/такси. Если кто-то предпочтет добираться на своем автомобиле, пожалуйста оповестите нас об том. И так же просим вас не беспокоиться с выбором подарков и цветов для нас.В качестве подарка будем благодарны за любой, даже символический, вклад в бюджет нашей молодой семьи:)'
    }
  ]

  return (
    <div className="flex flex-wrap justify-center">
      {info.map((it) => {
        return (
          <div
            key={it.id}
            className="min-w-320 max-w-sm h-70 rounded overflow-hidden shadow-lg mx-2 my-2"
          >
            <img className="h-40 w-full object-cover object-center p-2" alt="cart" src={it.img} />
            <div className="px-2 py-2">
              <div className="font-bold text-s mb-2">{it.title}</div>
              <div className="font-normal text-s mb-2">{it.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

About.propTypes = {}

export default About