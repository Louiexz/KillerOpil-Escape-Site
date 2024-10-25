import "./account.module.css"
import { useState } from 'react';
import Login from '../../inputs/login/Login';
import Register from '../../inputs/register/Register';
import Button from '../../button/Button'

function Account() {
    const [activeComponent, setActiveComponent] = useState(null);

    function handleButtonClick(component) {
        if (activeComponent !== component) {
            setActiveComponent(component);
        }
    }

    return (
        <>
            <div>
                <Button text="Sign-in" event="onClick" funct={() => handleButtonClick('Login')} />
                <Button text="Sign-up" event="onClick" funct={() => handleButtonClick('Register')}/>
            </div>

            {activeComponent === 'Login' && <Login />}
            {activeComponent === 'Register' && <Register />}
        </>
    );
}

export default Account;
