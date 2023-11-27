import HomeIcon from '@mui/icons-material/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { pathRoutes } from '../../routes/PathRoutes';
import './Login.css';

function LoginForm() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <section className="login-container">

                <Link to={pathRoutes.home} className='login-homeicon'><HomeIcon color="primary" fontSize="large" /></Link>
               
                <form className='login-form'>
                    <input placeholder='Admin' type='text' />
                    <input placeholder='Contraseña' type='password' />
                    <button> Ingresar</button>
                </form>
            </section>
        </ThemeProvider>
    )
}

export default LoginForm;