import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
        <div className='app-header'>
          <Header/>
        </div>
        <div className='app-main'>
          <Main/>
        </div>
        <div className='app-footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default App