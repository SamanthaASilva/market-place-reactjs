import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');

      if(userInfo) {
        setUserLogged(true);
      }

      setLoading(false);
    }, []);

    const loginUser = async (credencials) => {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credencials)
    });

    const data = await response.json();
    localStorage.setItem('userInfo', data);
    setUserLogged(true);
    navigate('/');
    }

    const logoutUser = () => {
      setUserLogged(false);
      localStorage.clear();
      navigate('/login')
    }
  return ({ userLogged, loading, loginUser, logoutUser })
}

export default useAuth
