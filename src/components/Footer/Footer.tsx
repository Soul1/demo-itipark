import React from 'react'
import Copy from './Copy/Copy'
import Contact from './Contact/Contact'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer__contact">
        <Contact/>
      </div>
      <div className="footer__copy">
        <Copy/>
      </div>
    </footer>
  )
}

export default Footer