import { AnyAction } from 'redux'
import { types } from '../../../types/typesReducers'

interface AuthState {
    checking: boolean;
}

const initialState: AuthState = {
    checking: true,
}

export const usersReducer = (state = initialState, action: AnyAction) => {
    
    switch (action.type) {
        
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }
            
        default:
            return state;
    }
}