import React from 'react';
// import { GiTwinShell } from 'react-icons/gi';
import './SelfCheck.css';
import Component from './Form';

function SelfCheck() {
  
  return (
    <div className='selfCheck'>
        <h1 className="selfCheckTitle"> COUNTY OF MONTEREY </h1>
        <h1 className="selfCheckTitle"> EMPLOYEE COVID-19 SELF SCREENING ASSESSMENT FORM </h1> 
        <p className="selfCheckoutBody"> 
            Pursuant to the Human Resources Emergency Response Manual Section 21 Temperature Testing
            and Self-Screening Assessment for new Symptoms Associated with COVID-19, County employees
            are <b>REQUIRED</b> to complete a self-screening assessment prior to entering any county facility
            or worksite.<b> This form shall be completed by employees who elected not to accesss and complete
            the online self-screening assessment options provided by the county. Once complete. please
            provide this self-screening assessment form to your supervisor/manager.</b>
        </p>

      <Component/>

      <p> <b> <u> Employee Temperature Assessment </u></b></p>
      <p> I have been tested with a thermometer and my temperature is less than 100.4 degrees Fahrenheit (Check the applicable answer): </p>

        
    </div>
  );
}

export default SelfCheck;