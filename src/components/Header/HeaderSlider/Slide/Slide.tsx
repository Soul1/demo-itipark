import React from 'react'
import {TSlide} from '../../Header'

type TProps = TSlide

const Slide: React.FC<TProps> = ({title, btnTitle}) => {
  return (
    <div className="header-slider__slide">
      <div className="header-slider__slide-title">
        {title}
      </div>
      <div className="header-slider__slide-btn btn">
        <a href='#'><button>{btnTitle}</button></a>
      </div>
    </div>
  )
}

export default Slide