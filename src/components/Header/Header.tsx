import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderSlider from './HeaderSlider/HeaderSlider'

export type TSlides = TSlide[]
export type TSlide = {title: string, btnTitle: string}

const Header = () => {
  const slides:TSlides = [
    {
      title: 'Бухгалтерские услуги в Санкт-Петербурге',
      btnTitle: 'Наша презентация '
    },
    {
      title: 'Бухгалтерские услуги в Санкт-Петербурге',
      btnTitle: 'Наша презентация '
    },
    {
      title: 'Бухгалтерские услуги в Санкт-Петербурге',
      btnTitle: 'Наша презентация '
    },
    {
      title: 'Бухгалтерские услуги в Санкт-Петербурге',
      btnTitle: 'Наша презентация '
    }
    ]
  return (
    <header className='header'>
      <div className="container">
        <div className='header__top'>
          <HeaderTop/>
        </div>
      </div>

      <div className='header__slider'>
        <HeaderSlider slides={slides}/>
      </div>
    </header>
  )
}

export default Header