import React, {useState} from 'react';


const Registerform = () => {

    const initialCredentials = [
        {
            user: '',
            name:'',
            email: '',
            password: '',

        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
};


export default Registerform;