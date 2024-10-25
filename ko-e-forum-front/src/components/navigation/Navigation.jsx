import './navbar.module.css';
import { useState } from 'react';
import Home from '../pages/Home';
import Topic from '../pages/topic/Topic';
import Inventory from '../pages/inventory/Inventory';
import Account from '../pages/account/Account';
import About from '../pages/about/About';
import Button from '../button/Button';

function Navigation() {
    const [activeComponent, setActiveComponent] = useState('Home'); // Exibe Home por padrão

    function handleButtonClick(component) {
        if (activeComponent !== component) {
            setActiveComponent(component);
        }
    }

    return (
        <>
            <nav>
                <Button text="Home" event="onClick" funct={() => handleButtonClick('Home')} />
                <Button text="Topic" event="onClick" funct={() => handleButtonClick('Topic')} />
                <Button text="Inventory" event="onClick" funct={() => handleButtonClick('Inventory')} />
                <Button text="About" event="onClick" funct={() => handleButtonClick('About')} />
                <Button text="Account" event="onClick" funct={() => handleButtonClick('Account')} />
            </nav>
            <main id="main">
                {activeComponent === 'Home' && <Home />}
                {activeComponent === 'Topic' && <Topic />}
                {activeComponent === 'Inventory' && <Inventory />}
                {activeComponent === 'About' && <About />}
                {activeComponent === 'Account' && <Account />}
            </main>
        </>
    );
}

export default Navigation;
