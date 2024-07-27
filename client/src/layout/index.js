import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center bg-custom-gray4 items-center py-3 h-20 shadow-md '>
            <img 
              src={logo}
              alt='logo'
              width={80}
              height={70}
            />
        </header>

        { children }
    </>
  )
}

export default AuthLayouts