import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="homeBody">
      <h1 className="homeTitle"> WELCOME TO THE MONTEREY COUNTY HOMEPAGE </h1>
      <p>
        Welcome to the County of Monterey Homepage.  
      </p>

      <p>
        Access the hamburger view to navigate the site.
        Use the link below to access your offical government Covid Vaccine Card.  
      </p>
    

      <a href="https://myvaccinerecord.cdph.ca.gov/" rel="noreferrer">
      <b> Access Your Digital Government Vaccine Card </b>
      </a>
      
    </div>
  );
}

export default Home;