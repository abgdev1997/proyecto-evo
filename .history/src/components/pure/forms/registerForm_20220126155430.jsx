import React, {useState} from 'react';


const Registerform = () => {

    const initialData = [
        {
            user: '',
            name:'',
            email: '',
            password: '',

        }
    ]

    const [credentials, setCredentials] = useState(initialData);

    return (
        <div>
            
        </div>
    );
};


export default Registerform;