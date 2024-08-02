import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setRecieverUserId } from '../redux/userSlice'

const PageNotFound = () => {
  const dispatch = useDispatch()

  dispatch(setRecieverUserId(undefined))

  return (
    <div className='text-white flex flex-col items-center mx-auto w-max h-max my-12'>
      <div className='text-3xl'>
         PageNotFound
      </div>
      <div className='text-xl my-5'>
        what were your searching? sus
        </div>
        <div>
          Click to login <Link to='/login' className='text-blue-500'>Login</Link>
        </div>
      </div>
  )
}

export default PageNotFound