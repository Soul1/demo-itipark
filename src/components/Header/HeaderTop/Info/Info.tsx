import React from 'react'

type TProps = {}

const Info: React.FC<TProps> = () => {
  return (
    <div className='info'>
      <ul className='info-list'>
        <li className='info__phone for-before'>
          <a href='tel:8 (111) 222-33-44'> 8 (111) 222-33-44</a>
        </li>
        <li className='info__clock for-before'>
          Пн-Пт 10:00-18:00
        </li>
        <li className='info__email for-before'>
          <a href='mailto:order@buhone.ru'>order@buhone.ru</a>
        </li>
        <li className='info__map for-before'>
          <a href='https://goo.gl/maps/6tzWRBXV7GzuKuCS7' target='_blank' rel='noopener noreferrer'>
            Невский пр. 130
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Info