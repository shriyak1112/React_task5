import React, { useState } from 'react';
import './style.css';

const AgeCalculator = () => {

  const [birthdate,setBirthdate] = useState('');

  const [age,setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);


    let age = today.getFullYear() - birthdateDate.getFullYear();

    const monthDiff = today.getMonth() - birthdateDate.getMonth();

    if(monthDiff <0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate()))
    {
      age --;
    }


    setAge(age);
    
    
  }

  return (
    <div className='Container'>
      <h1 className='heading container-title'>Age Calculator</h1>

      <div className='Container-middle '>
      <h3>Enter your Date of birth </h3>
      <input className='date' type='date'value={birthdate} onChange={e => setBirthdate(e.target.value)} />
      <div className='button_div'>
        <button className='button-65' onClick={calculateAge} >Calculate Age</button>
      </div>
      <div>
        <h3>Your Age is: </h3>
      </div>
      <h3 className='age_heading'>{age > 0 ? `${age}`: ''}</h3>


      </div>
    </div>
  )
}

export default AgeCalculator;
