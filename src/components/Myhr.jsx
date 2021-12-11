import React from 'react';
import myhr from '../data/myhr';

function Myhr(){
    return (
        <p className='my-hr'> {myhr.text} </p>
    );
}

export default Myhr;