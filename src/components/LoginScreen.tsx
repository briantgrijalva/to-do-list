import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useAppDispatch } from '../store/store';
import { authStart } from '../actions/auth';
import '../styles/loginScreen.css';

export const LoginScreen = () => {

  const dispatch = useAppDispatch()
  const [newUser, setNewUser] = useState(false)
  
  const [values, handleLoginInputChange, reset] = useForm({
    name: '',
    email: 'correo@correo.com',
    password: '1234',
  });

  const { name, email, password } = values;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(authStart(email, password));

    reset();
  }

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='container-login'>
      {newUser ? (
        <div className='container-register-user'>
          <div>
          <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Welcome</h3>
          </div>
          <div>
          <form onSubmit={handleRegister}>
            <div style={{
              display: 'flex',
              justifyContent:'center'
            }}>
              <input 
                type="text" 
                placeholder="name" 
                name='name'
                value={name}
                onChange={handleLoginInputChange}
                className='input-write-task'
                style={{
                  backgroundColor: '#FFF', 
                  margin: '0', 
                  marginBottom: '1rem', 
                  height: '2rem', 
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent:'center'
            }}>
              <input 
                type="text" 
                placeholder="Username" 
                name='email'
                value={email}
                onChange={handleLoginInputChange}
                className='input-write-task'
                style={{
                  backgroundColor: '#FFF', 
                  margin: '0', 
                  marginBottom: '1rem', 
                  height: '2rem', 
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent:'center'
            }}>
              <input 
                type="password" 
                placeholder="Password" 
                name='password'
                value={password}
                onChange={handleLoginInputChange}
                className='input-write-task'
                style={{
                  backgroundColor: '#FFF', 
                  margin: '0', 
                  marginBottom: '1rem', 
                  height: '2rem', 
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            <button type="submit" className='btn-confirm' style={{width: '100%', margin: 'auto'}}>Sign Up</button>
          </form>
          <div style={{
              display: 'flex',
              justifyContent:'center',
              marginTop: '1rem',
              cursor: 'pointer'
            }}>
            <p onClick={() => setNewUser(!newUser)}>Do you have account? Sign In</p>
          </div>
          {/* <button onClick={() => setNewUser(!newUser)}>Register</button> */}
        </div> 
        </div>
      ) : (
        <div className='container-login-user'>
           <div>
            <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Welcome</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div style={{
              display: 'flex',
              justifyContent:'center'
            }}>
              <input 
                type="text" 
                className='input-write-task'
                placeholder="email" 
                name='email'
                value={email}
                onChange={handleLoginInputChange}
                style={{
                  backgroundColor: '#FFF', 
                  margin: '0', 
                  marginBottom: '1rem', 
                  height: '2rem', 
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent:'center'
            }}>
              <input 
                type="password" 
                className='input-write-task'
                placeholder="Password" 
                name='password'
                value={password}
                onChange={handleLoginInputChange}
                style={{
                  backgroundColor: '#FFF', 
                  margin: '0', 
                  marginBottom: '1rem', 
                  height: '2rem', 
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            <button type="submit" className='btn-confirm' style={{width: '100%', margin: 'auto'}}>Sign In</button>
          </form>
            <div style={{
              display: 'flex',
              justifyContent:'center',
              marginTop: '1rem',
              cursor: 'pointer'
            }}>
            <p onClick={() => setNewUser(!newUser)}>Don't you have account? Sign Up</p>
          </div>
          {/* <button onClick={() => setNewUser(!newUser)}>Register</button> */}
        </div> 
      )}
    </div>
  )
}
