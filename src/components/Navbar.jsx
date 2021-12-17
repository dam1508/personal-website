import React from 'react';
import Navlink from './Navlink';
import Switch from './Switch';

function Navbar(){
    return (
        <div className='navbar'>
            <Navlink text='Home' target='home' />
            <Navlink text='About' target='about' offset={-200} />
            <Navlink text='Skills' target='skills' />
            <Navlink text='Contact' target='contact' />
            <Switch />
        </div>
    );
}

export default Navbar;