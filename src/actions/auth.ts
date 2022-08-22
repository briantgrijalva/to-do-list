import { types } from "../types/typesReducers";
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/store'
import { fetchConToken, fetchSinToken } from "../utils/fetch";

interface IUser {
    id: string;
    name: string;
}

export const authStart = (email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        const resp = await fetchSinToken(`${process.env.REACT_APP_LOGIN_AUTH_ENPOINT}`, { email, password }, 'POST');
        const body = await resp.json();
        console.log(body);

        if (body.success) {
            localStorage.setItem('token', body.token);

            dispatch(login({
                id: body.data.id,
                name: body.data.name
            }));

        } else {
            console.log(body.message);
            console.log('error');
            
        }
    }
}

export const authRegister = (name: string, email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        const resp = await fetchSinToken(`${process.env.REACT_APP_LOGIN_AUTH_ENPOINT}`, { name, email, password }, 'POST');
        const body = await resp.json();
        console.log(body);

        if (body.success) {
            localStorage.setItem('token', body.token);

            dispatch(login({
                id: body.data.id,
                name: body.data.name
            }));

        } else {
            console.log(body.message);
            console.log('error');
            
        }
    }
}

export const startChecking = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        const resp = await fetchConToken(`${process.env.REACT_APP_RENEW_AUTH_ENPOINT}`, {}, 'GET');
        const body = await resp.json();

        console.log(body);
        
        if (body.success) {
            localStorage.setItem('token', body.token);

            dispatch(login({
                id: body.data.id,
                name: body.data.name
            }));
        } else {
            dispatch(checkingFinish());
        }
    }
}
const login = (user: IUser) =>({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const logoutFn = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
});