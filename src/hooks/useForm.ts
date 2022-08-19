import { useState } from 'react';

interface IUserLogin {
    lEmail: string;
    lPassword: string;
}

interface IUserCreate {
    name: string;
    email: string;
    password: string;
}


export const useForm = ( initialState: IUserLogin ): [ IUserLogin, (event: React.ChangeEvent<HTMLInputElement>) => void, any] => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}