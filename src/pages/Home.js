import React from 'react';
import Button from '../UI/Button';
import '../assets/bg.jpeg';
import './Home.css';

export default function Home() {
  return (
    <div className="main" style={{ backgroundImage: "url(/bg.jpeg)" }}>
      <h1 className="title">Welcome to Inexamed Drug drug interaction Checker</h1>
      <p className="description">Welcome to InexaMed. Our mission is to provide reliable medical information on drug-drug interactions
          which helps healthcare professionals to make important decisions at the point-of-care. All the
          medication information in our database is retrieved from accredited and reliable resources such as the
          British National Formulary, Patient Information Leaflets, Electronic Medicines Compendium, journals
          and government regulatory agencies such as the Medicine and Healthcare Products Regulatory Agency
          and the US Food and Drug Administration. The information in our database is thoroughly peer-reviewed
          by pharmacists and physicians.
      </p>
      <div className="buttons">
          <Button type="submit">Let Get Started</Button>
      </div>    
    </div>
  )
}