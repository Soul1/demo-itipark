import React from 'react'
import Title from '../../common/Title/Title'
import PresItem from "../../common/PresItem/PresItem";

type TProps = {}
type TInfo = {
  imgUrl: string
  title: string
}
const OurServices: React.FC<TProps> = () => {

  const forTitle = {
    title: 'Мы специализируемся',
    titleTop: 'Наши услуги'
  }
  const forInfos: TInfo[] = [
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
    {
      imgUrl: 'https://www.automega.biz/dello/img/350x350.png',
      title: 'Бухгалтерское обслуживание'
    },
  ]
  return (
    <section className='our-services'>
      <div className='container'>
        <div className='our-services__titles'>
          <Title {...forTitle}/>
        </div>
        <div className='our-services__info'>

          {forInfos.map((info) =>
            <div className='our-services__info-item'>
              <PresItem {...info}/>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default OurServices