import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const [inputValues, setInputValues] = useState({
        email: '',
        senha: ''
    });

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
    })};

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginUser(inputValues);
    }

  return (
    <main className='h-screen w-full banner'>
        <div className='flex flex-col items-center pt-20 h-screen'>
            <img src={logo} alt='logo' className='w-52'></img>
            <form onSubmit={handleSubmit} className='bg-white w-96 p-4 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-6'>
                    <input type="mail" placeholder='Digite seu e-mail' name="email" 
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:outline-none transition duration-500 focus:shadow-xl'
                    onChange={handleChangeValues}/>
                    <input type="password" placeholder='Digite sua senha:' name="senha" 
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:outline-none transition duration-500 focus:shadow-xl'
                    onChange={handleChangeValues}/>
                </div>
                <button type="submit" className='w-full text-white py-3 bg-primary focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
                    Entrar
                </button>
                <p className='text-primary text-center text-base my-6 hover:underline cursor-pointer'>
                    Não tem uma conta? Registre-se aqui.
                </p>
            </form>

        </div>
      
    </main>
  )
}

export default Login
