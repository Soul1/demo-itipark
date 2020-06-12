import React from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import Info from './Info/Info'

type TProps = {}

const HeaderTop: React.FC<TProps> = () => {
  return (
      <div className='header-top'>

        <div className='header-top__logo'>
          <Logo/>
        </div>

        <div className='header-top__inner'>

          <div className='header-top__inner-info'>
            <Info/>
          </div>

          <div className='header-top__inner-nav'>
            <Nav/>
          </div>

        </div>
    </div>
  )
}

export default HeaderTop