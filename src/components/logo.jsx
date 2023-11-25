import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Logo = () => {

  return (
    <div className='App'>
        <span className='font-bold text-red-200'>Stokify {" "}</span>

        <span className='text-gray-200' >
          <Typewriter
            words={["Let's grow"," with us"]}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={2000}
          
          />
        </span>
      
    </div>
  )
}

export default Logo;