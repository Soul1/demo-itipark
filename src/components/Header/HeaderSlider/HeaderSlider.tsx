import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide/Slide'
import {TSlides} from '../Header'

type TProps = {
  slides: TSlides
}

const HeaderSlider: React.FC<TProps> = ({slides}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='header-slider'>
      <div className="container">
        <div className="header-slider__inner">
          <Slider {...settings}>
            {slides.map((slide) => <Slide {...slide}/>)}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider