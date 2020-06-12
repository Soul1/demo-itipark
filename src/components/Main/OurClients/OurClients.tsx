import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide/Slide'
import Title from "../../common/Title/Title";

type TProps = {}

const OurClients: React.FC<TProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  const title = {
    title: 'С нами работают',
    titleTop: 'Наши клиенты'
  }
  const slides = [
    {
      imageUrl: 'https://i.ibb.co/HTXVpKT/Rectangle-2-3.png'
    },
    {
      imageUrl: 'https://i.ibb.co/HTXVpKT/Rectangle-2-3.png'
    },
    {
      imageUrl: 'https://i.ibb.co/HTXVpKT/Rectangle-2-3.png'
    },
    {
      imageUrl: 'https://i.ibb.co/HTXVpKT/Rectangle-2-3.png'
    },
    {
      imageUrl: 'https://i.ibb.co/HTXVpKT/Rectangle-2-3.png'
    },
  ]
  return (
    <section className='our-clients'>
      <div className='container'>
        <div className='our-clients__title'>
          <Title {...title}/>
        </div>
        <div className='our-clients__slider'>
          <Slider {...settings}>
            {slides.map((slide) =>
              <div className='our-clients__slide'>
                <Slide {...slide}/>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default OurClients