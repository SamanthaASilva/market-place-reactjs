import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { userLogged } = useContext(AuthContext);

    if(!userLogged) {
        return <Navigate to={'/login'}/>
    } else {
        return children
    }
}

export default ProtectedRoute
