import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';


export const PrivateRoute = ({children}: any) => {

    // const {uid} = useSelector( state => state.auth );
    const {id} = useAppSelector(state => state.users)

    let user = id;
    // let user = 'uid';

    return !!user
        ? children
        : <Navigate to="/login" /> 
}
