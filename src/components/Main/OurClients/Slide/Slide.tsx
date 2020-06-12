import React from 'react'

type TProps = {
  imageUrl: string
}

const Slide: React.FC<TProps> = ({imageUrl}) => {
  return (
    <div className='our-clients__slide'>
      <img src={imageUrl} alt='client logo'/>
    </div>
  )
}

export default Slide