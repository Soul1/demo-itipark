import React from 'react'

type TProps = {
  imageUrl: string
  text: string
  fullName: string
  jobPosition: string
}

const Slide: React.FC<TProps> =
  ({imageUrl, text, jobPosition, fullName}) => {
    return (
      <div className='reviews__slide'>
        <div className="reviews__slide-text">
          <p>{text}</p>
        </div>
        <div className="reviews__slide-info">
        <img src={imageUrl} alt='client logo'/>
        <div className="reviews__slide-info__inner">
          <div className="reviews__slide-info__inner-name">
            {fullName}
          </div>
          <div className="reviews__slide-info__inner-job">
            {jobPosition}
          </div>
        </div>
        </div>
      </div>
    )
  }

export default Slide