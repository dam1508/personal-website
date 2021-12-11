import React from 'react';
import myPicture from '../images/damian.png';

function Header(props) {
    return (
        <header className="App-header">
            <h1>{props.headerText}</h1>
            <div>
                <img src={myPicture} alt="picture of me" />
            </div>
        </header>
    );
}

export default Header;