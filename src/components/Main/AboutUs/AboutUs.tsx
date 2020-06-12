import React from 'react'
import Title from '../../common/Title/Title'
import CaseItem from '../../common/CaseItem/CaseItem'

type TProps = {}

const AboutUs: React.FC<TProps> = () => {
  const title = {
    title: 'Компания',
    spanTitle: 'ИвановПром',
    titleTop: 'О нас'
  }
  const caseItems = [
    {
      count: 90,
      title: 'Завершено крупных сделок',
      linkTitle: 'Все кейсы',
      linkUrl: '#'
    },
    {
      count: 90,
      title: 'Завершено крупных сделок',
      linkTitle: 'Все кейсы',
      linkUrl: '#'
    },
    {
      count: 90,
      title: 'Завершено крупных сделок',
      linkTitle: 'Все кейсы',
      linkUrl: '#'
    },
    {
      count: 90,
      title: 'Завершено крупных сделок',
      linkTitle: 'Все кейсы',
      linkUrl: '#'
    },
  ]
  return (
    <div className='container'>
      <section className='about-us'>

        <div className='about-us__inner'>
          <div className='about-us__title'>
            <Title {...title}/>
          </div>
          <div className='about-us__text'>
            <p>
              Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной
              'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
              коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
              успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн
            </p>
          </div>
        </div>
        <div className='about-us__info'>
          {caseItems.map((caseItem) => <CaseItem {...caseItem}/>)}
        </div>
      </section>
    </div>
  )
}

export default AboutUs