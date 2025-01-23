import React from 'react';
import {useNavigate} from 'react-router-dom';
const Temp = () => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate('/TempBox', {
      
    });
  };
 
  return (
      <div>
         <div className='context' style={{ background: 'linear-gradient(to right, #4444db,#7fc9c6)',}}>
        <h1><span style={{color:'#2ae8e9',}}>Free</span> Email Templates</h1>
        <p>Jump-start your next email campaign with MailCanvas's 
          free email templates. Crafted for various occasions, industries, 
          and seasons, these templates provide flexibility. 
          Work effortlessly with your team for smooth 
          collaboration and use the AI Assistant to tackle writer's
           block. With MailCanvas, the design options are limitless.</p>
      </div>

      <footer className='templates-main-box'>
        <div className='blank-box' onClick={handleEditClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
          <h2>Blank Template</h2>
          <p>start from scratch</p>
        </div>

      <div className='template-module'>
        <div className='card-module'>
          <p>Email Template</p>
          <h3>Learn About Chinese New Year</h3>
         <button onClick={handleEditClick}>Edit</button>
        </div>
    </div>

    
    <div className='img-temp'>
        <button></button>
    </div>

    
    <div className='img-temp'>
        <button></button>
    </div>

    
    <div className='img-temp'>
        <button></button>
    </div>

        
      </footer>

</div>
     

      
  );
};

export default Temp;
