import { useState } from 'react';

interface IUserLogin {
    name?: string;
    email: string;
    password: string;
}

// interface IUserCreate {
//     Rname: string;
//     Remail: string;
//     Rpassword: string;
// }


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