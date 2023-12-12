import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './router/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
