import React from 'react';
import { useParams } from 'react-router-dom';
import './EmailConfirmation.scss';

const EmailConfirmation = () => {

    const { email, token } = useParams();
    return ( <></> );
}
 
export default EmailConfirmation;