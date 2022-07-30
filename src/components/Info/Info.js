import React from 'react';

import image from '../../images/image.png'
import mail from '../../images/envelope-solid.svg'

export default function Info() {
    function copyEmail() {
        const email = 'codsworthmore@gmail.com';
    
        navigator.clipboard.writeText(email);
    
        alert('Copied: ' + email)
    }

    return (
        <div className='info'>
            <img className='info--img' src={image} alt='fish'/>
            <div className='info--text'>
                <h1 id='info--name'>Cods</h1>
                <h3 id='info--title'>Hobbyist Developer</h3>
                <h5 id='info--website'>simply-cods.github.com</h5> 
                <button className='info--btn' onClick={copyEmail} title='Copy email address'>
                    <img src={mail} alt='envelope'/>
                    <p>Email</p>
                </button>
            </div>
        </div>
    )
}