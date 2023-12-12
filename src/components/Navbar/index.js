import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
              <img src={logo} alt='logo' className='w-36 cursor-pointer'/>
              <h1 className='justify-center text-2xl font-semibold text-gray-700 '>Food App</h1>
            </div>
            {userLogged ?
            <div className='flex items-center space-x-4 justify-end'>
              <p className='text-gray-700'>Olá, usuário</p>
              <div className='relative flex cursor-pointer'>
                <span className='bg-primary text-white p-1 w-4 h-4 rounded-full flex items-center justify-center absolute -right-2 -top-2'>2</span>
                <BsCartFill className='w-6 h-6 cursor-pointer'/>
              </div>
                <MdOutlineLogout className='w-6 h-6 cursor-pointer' onClick={logoutUser}/>
            </div>
            :
            <div className='flex items-center justify-end space-x-6'>
              <button onClick={() => navigate('/login')}>Login</button>
              <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
            </div>
            }
        </nav>
    </header>
  )
}

export default Navbar
