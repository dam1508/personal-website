import React from 'react';
import Navlink from './Navlink';

function Navbar(){
    return (
        <div className='navbar'>
            <Navlink text='Home' target='home' />
            <Navlink text='About' target='about' />
            <Navlink text='Skills' target='skills' />
            <Navlink text='Contact' target='contact' />
        </div>
    );
}

export default Navbar;