import React from 'react'
import OurServices from './OurServices/OurServices'
import AboutUs from "./AboutUs/AboutUs";
import OurClients from "./OurClients/OurClients";
import Reviews from "./Reviews/Reviews";

type TProps = {}

const Main: React.FC<TProps> = () => {
  return (
    <main className='main'>

        <div className='main__our-services'>
          <OurServices/>
        </div>
        <div className='main__about-us'>
          <AboutUs />
        </div>
        <div className='main__our-clients'>
          <OurClients/>
        </div>
        <div className='main__reviews'>
          <Reviews/>
        </div>
    </main>
  )
}

export default Main