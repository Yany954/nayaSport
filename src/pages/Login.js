import React, { useState } from 'react';
import axios from 'axios'; // Importa Axios

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
    <div className='container-background'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
