import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser} from '../redux/userSlice';

const Login = () => {
    // const user = useSelector(state => state.user);
    const token = useSelector(state => state.user.token);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    // console.log("token-----------", token)
    useEffect(() => {
        if (location.pathname !== '/login') {
            navigate('/login');
        }
    }, [location, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/login`;

        try {
            console.log("login", data)
            const response = await axios.post(URL, {
                email: data.email,
                password: data.password
            });

            toast.success(response.data.message);

            if (response.data.success) {
                dispatch(setToken(response?.data?.token));
                localStorage.setItem('token', response?.data?.token);
                dispatch(setUser(response?.data?.data));
                console.log("login token---------", response.data.data)
                // console.log("login token 2 ------------", abc)

                setData({
                    email: "",
                    password: "",
                });
                navigate('/');
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className='mt-5 max-md:mx-6 rounded-md'>
            <div className='bg-custom-gray3 text-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
                <h3>Welcome to Chat app!</h3>
                <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email' 
                            className='bg-custom-gray4 px-2 py-1 rounded-sm focus:outline-custom-gray2'
                            value={data.email}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter your password' 
                            className='bg-custom-gray4 px-2 py-1 rounded-sm focus:outline-custom-gray2'
                            value={data.password}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <button
                        className='bg-custom-gray4 text-lg px-4 py-1 border border-custom-gray4 hover:border-custom-gray2 rounded-sm mt-2 font-bold text-white leading-relaxed tracking-wide'
                    >
                        Login
                    </button>
                </form>
                    <p className='my-3 mx-3 mt-5 text-sm text-center'>New User? <Link to="/register" className='hover:underline font-semibold'>Register</Link></p>
                    
            </div>
        </div>
    );
}

export default Login;
