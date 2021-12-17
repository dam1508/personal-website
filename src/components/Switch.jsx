import React, { useState } from "react";
import {dark, light, variables} from '../data/theme';

function Switch(){

    const [darkMode, setDarkMode] = useState(true);

    function changeTheme() {

        setDarkMode(prev => {
            variables.forEach((element, index) => {
                document.documentElement.style.setProperty(element, !prev ? dark[index] : light[index]);
            });
            return !prev;
        });

        

    }

    return (
        <div className="switch" onClick={changeTheme}>
            <p>{darkMode? "Light" : "Dark"}</p>
        </div>
    )
}

export default Switch;