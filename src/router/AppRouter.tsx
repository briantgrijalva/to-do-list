import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/LoginScreen'
import { useAppDispatch, useAppSelector } from '../store/store'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useAppDispatch()
    const {checking} = useAppSelector(state => state.users);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])
    

    if (checking) {
        return <div>Loading...</div>
    }

  return (
    <BrowserRouter>

            <Routes>

                

                <Route path="/login" element={

                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>

                } />


                <Route path="/*" element={
                     <PrivateRoute>
                         <DashboardRoutes />
                     </PrivateRoute> 
                    } 
                />
  

            </Routes>
        </BrowserRouter> 
  )
}
