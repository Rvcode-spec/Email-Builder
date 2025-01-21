import React from 'react'
import {useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate(); // Hook to navigate programmatically
  return (
    <div className='body'>
        <div className='context'>
            <h1>The ultimate HTML email builder that delivers</h1>
            <p>Accelerate your email creation process with Beefree's intuitive drag-and-drop 
                HTML editor. Seamlessly transfer emails to any sending platform 
                in just a few clicks.</p>
                <button id='btn' onClick={() => navigate('/temp')}>Start Building</button>
        </div>
    </div>
  )
}
