import React from 'react'

type TProps = {}

const Nav: React.FC<TProps> = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>

        <li className='nav-list__title'>
          <a href="#">Главная</a>
        </li>

        <li className='nav-list__title'>
          <a href="#">Услуги</a>
        </li>

        <li className='nav-list__title'>
          <a href="#">Кейсы</a>
        </li>

        <li className='nav-list__title'>
          <a href="#">О компании</a>
        </li>

        <li className='nav-list__title'>
          <a href="#">Контакты</a>
        </li>

      </ul>
    </nav>
  )
}

export default Nav