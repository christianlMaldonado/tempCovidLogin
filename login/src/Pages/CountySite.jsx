import React from 'react';
import './CountySite.css';

function CountySite() {
  return (
    <div className='countySiteBody'>
     
      <h1> County Site </h1>
     
      <a  href="https://www.co.monterey.ca.us/home" rel="noreferrer">
      <b> County of Monterey Home </b>
      </a>

      <br/>

      <a  href="https://arcg.is/Hfefy" rel="noreferrer">
      <b> Emergency Shelters </b>
      </a>

      <br/>

      <a  href="https://www.governmentjobs.com/careers/montereycounty" rel="noreferrer">
      <b> Monterey County Career Opportunities </b>
      </a>

      <br/>

      <a  href="https://www.caljobs.ca.gov/vosnet/Default.aspx" rel="noreferrer">
      <b> Cal Jobs Emploment Opportunities </b>
      </a>

      <br/>

      <a  href="http://montereyco.maps.arcgis.com/apps/Shortlist/index.html?appid=d24344d65e7443889cf6cae29f95bd75" rel="noreferrer">
      <b> Special Events In Monterey County </b>
      </a>
      
    </div>
  );
}

export default CountySite;