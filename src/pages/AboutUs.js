import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="container">
      <div className="title">
        <h1>  About InexaMed</h1> 
      </div>
      <div className="content">
        <p>
          {" "}
          Welcome to InexaMed. Our mission is to provide reliable medical information on drug-drug interactions
        which helps healthcare professionals to make important decisions at the point-of-care. All the
        medication information in our database is retrieved from accredited and reliable resources such as the
        British National Formulary, Patient Information Leaflets, Electronic Medicines Compendium, journals
        and government regulatory agencies such as the Medicine and Healthcare Products Regulatory Agency
        and the US Food and Drug Administration. The information in our database is thoroughly peer-reviewed
        by pharmacists and physicians.
          {" "}
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}