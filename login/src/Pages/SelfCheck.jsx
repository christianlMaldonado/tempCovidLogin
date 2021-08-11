import React from 'react';
// import { GiTwinShell } from 'react-icons/gi';
import './SelfCheck.css';
import NameForm from './NameForm';

function SelfCheck() {
  
  return (
    <div className='selfCheck'>
        <h1 className="selfCheckTitle"> COUNTY OF MONTEREY </h1>
        <h1 className="selfCheckTitle"> EMPLOYEE COVID-19 SELF SCREENING ASSESSMENT FORM </h1> 
       
      <NameForm/>

     

        
    </div>
  );
}

export default SelfCheck;