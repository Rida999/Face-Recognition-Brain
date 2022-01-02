import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

export default function Logo() {
    return (
        <div className='ma4 mt0 Z'>
            <Tilt className="Tilt br2 shadow-1 pointer" options={{ max : 45 }} >
                <div className="Tilt-inner"> 
                <img src={brain} alt='brain storm' />
                </div>
            </Tilt>
        </div>
    )
}
