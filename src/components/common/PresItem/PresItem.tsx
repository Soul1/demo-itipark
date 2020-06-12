import React from 'react'

type TProps = {
  imgUrl: string
  title: string
}

const PresItem: React.FC<TProps> = ({title, imgUrl}) => {
 return (
  <div className='pres-item'>
    <img src={imgUrl} alt='image item' className='pres-item__image'/>
    <h3 className='pres-item__title'>
      {title}
    </h3>
  </div>
 )
}

export default PresItem