import React from 'react'

type TProps = {}

const Copy: React.FC<TProps> = () => {
  return (
    <div className='copy'>
      <div className='container'>
        <div className='copy__inner'>

          <div className='copy__inner-text'>
            2019 (с) Все права защищены. БухОне.ру
          </div>

          <div className='copy__inner-designed'>
            Разработано: BuhOne
          </div>

        </div>
      </div>
    </div>
  )
}

export default Copy