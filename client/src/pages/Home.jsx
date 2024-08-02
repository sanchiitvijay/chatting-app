import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice'
import Sidebar from '../components/Sidebar'
import wallpaper from '../assets/wallpaper.jpg'
import io from 'socket.io-client'

const Home = () => {
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.user.token)
  console.log("token in home-----------------",token)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  if(!user?._id){
    navigate("/login")
  }

  if(user?.receiverUserId !== useParams()?.userId){
    console.log("receiverUserId in home---------",user?.receiverUserId)
    console.log("params in home----------",params?.userId)
    navigate(`/page-not-found`)
  }

  // if(!token) {
  //   console.log("token----------",token)
  //   console.log("-------------token home-------------")
  //   navigate('/login')
  // }
  console.log('user',user)
  const fetchUserDetails = async()=>{
    try {
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
        const response = await axios({
          url : URL,
          withCredentials : true
        })
        console.log("token in home -------------",token)
        console.log("response in home -------------",response)

        dispatch(setUser(response.data.data))

        // if(response.data.data.logout){
        //     dispatch(logout())
        //     navigate("/login")
        // }
        console.log("current user Details",response)
    } catch (error) {
        console.log("error",error)
    }
  }

  // useEffect(()=>{
  //    UserDetails()
  // },[])

  /***socket connection */
  useEffect(()=>{
    const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
      auth : {
        token : localStorage.getItem('token')
      },
    })

    socketConnection.on('onlineUser',(data)=>{
      console.log(data)
      dispatch(setOnlineUser(data))
    })

    dispatch(setSocketConnection(socketConnection))

    return ()=>{
      socketConnection.disconnect()
    }
  },[])


  const basePath = location.pathname === '/'
  console.log("aaya hai home pe----------", token)
  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
        <section className={`${!basePath && "hidden"} lg:block`}>
           <Sidebar/>
        </section>

        {/**message component**/}
        <section className={`${basePath && "hidden"}`} >
            <Outlet/>
        </section>


        <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex" }`}>
            <p className='text-xl mt-2 text-white'>Select user to send message</p>
        </div>
    </div>
  )
}

export default Home