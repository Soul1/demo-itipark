import React from 'react'
import Slider from 'react-slick'
import Slide from "./Slide/Slide";
import Title from "../../common/Title/Title";

type TProps = {}

const Reviews: React.FC<TProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const forTitle = {
    title: 'Ваши благодарности',
    titleTop: 'Отзывы'
  }
  const slides = [
    {
      imageUrl: 'https://i.ibb.co/JQXj2wq/dogan-author.png',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      fullName: 'Екатерина Иванова',
      jobPosition: 'Директор ООО “Раз-два”'
    },
    {
      imageUrl: 'https://i.ibb.co/JQXj2wq/dogan-author.png',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      fullName: 'Екатерина Иванова',
      jobPosition: 'Директор ООО “Раз-два”'
    },
    {
      imageUrl: 'https://i.ibb.co/JQXj2wq/dogan-author.png',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      fullName: 'Екатерина Иванова',
      jobPosition: 'Директор ООО “Раз-два”'
    },
    {
      imageUrl: 'https://i.ibb.co/JQXj2wq/dogan-author.png',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      fullName: 'Екатерина Иванова',
      jobPosition: 'Директор ООО “Раз-два”'
    },
  ]
  return (
    <section className='reviews'>
      <div className="container">
        <div className="reviews__title">
          <Title {...forTitle} />
        </div>
        <div className="reviews__slider">
          <Slider {...settings}>
            {slides.map((slide) => <Slide {...slide}/>)}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Reviews