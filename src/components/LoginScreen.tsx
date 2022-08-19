import React from 'react';
import { useForm } from '../hooks/useForm';
import { useAppDispatch } from '../store/store';
import { authStart } from '../actions/auth';

export const LoginScreen = () => {

  const dispatch = useAppDispatch()
  
  const [values, handleLoginInputChange] = useForm({
    lEmail: 'correo@correo.com',
    lPassword: '1234'
  });

  const { lEmail, lPassword } = values;

  const handleLogin = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(authStart(lEmail, lPassword));

    // console.log(formLoginValues);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          name='lEmail'
          value={lEmail}
          onChange={handleLoginInputChange}
        />
        <input 
          type="password" 
          placeholder="Password" 
          name='lPassword'
          value={lPassword}
          onChange={handleLoginInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
