import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setRecieverUserId } from '../redux/userSlice'

const UserSearchCard = ({user, onClose}) => {
    const selector = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const addReceiverUser = () => {
        onClose()
        console.log('addReceiverUser---------', user?._id)
        dispatch(setRecieverUserId(user?._id))

    }

  return (
    <Link to={"/"+user?._id} onClick={addReceiverUser} className='flex bg-custom-gray2 text-white items-center gap-3 p-2 lg:p-4 border border-transparent border-b-slate-200 hover:border hover:border-primary rounded cursor-pointer'>
        <div>
            <Avatar
                width={50}
                height={50}
                name={user?.name}
                userId={user?._id}
                imageUrl={user?.profile_pic}
            
            />
        </div>
        <div>
            <div className='font-semibold text-ellipsis line-clamp-1'>
                {user?.name}
            </div>
            <p className='text-sm text-ellipsis line-clamp-1'>{user?.email}</p>
        </div>
    </Link>
  )
}

export default UserSearchCard