import React, { useState } from 'react';
import axios from 'axios'; 


import '../Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.data.success) {
        window.location.href = '/';
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Hubo un error al iniciar sesión');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario" 
          />
        </div>
        <div className='input-container'>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña" 
          />
        </div>
        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
