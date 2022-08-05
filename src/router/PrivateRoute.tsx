import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({children}: any) => {

    // const {uid} = useSelector( state => state.auth );

    // let user = uid;
    let user = 'uid';

    return !!user
        ? children
        : <Navigate to="/login" /> 
}
