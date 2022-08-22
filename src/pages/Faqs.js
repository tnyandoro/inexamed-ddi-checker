import React from "react";
import "./Faqs.css";

export default function Faqs() {
  return (
    <div className="container"> 
      <div>
      <h1>FAQs</h1>
      </div>
      <div classname="main-content">
        <ul>
          <li classname="faqs-Q">Q: What does InexaMed do?</li>
          <li> InexaMed assists healthcare professionals and students to identify drug interactions using an up-to-date
              database that works offline on their PCs. It also allows healthcare professionals to safely store patient-
              drug information (allergies, regular medication and drugs they cannot take) in their respective accounts.
          </li>
          <li classname="faqs-Q"> Q: What kind of users and organizations can use InexaMed?</li>
          <li> InexaMed can be used by doctors, pharmacists, pharmaceutical companies, lecturers, students,
                Government organizations and other medical personnel.
          </li>
          <li classname="faqs-Q"> Q: What language does InexaMed support?</li>
          <li> InexaMed supports these languages: English</li>
          <li classname="faqs-Q"> Q: Does InexaMed have a mobile application?</li>
          <li></li>
          <li classname="faqs-Q"> Currently, InexaMed does not have a mobile application. InexaMed is available on Windows desktop and
                Mac IOS and on a webapp</li>
          <li></li>
          <li classname="faqs-Q"> Q: How long does a membership last?</li>
          <li> InexaMed memberships are either monthly or yearly.</li>

          <li classname="faqs-Q"> Q: Where is the medicine information retrieved from?</li>
          <li> InexaMed retrieves its information from trusted sources only: nlm, Patient
                Information Leaflets (PILs), Electronic Medicines Compendium, journals such as PubMed and medicine
                regulatory agencies. Information in the database is also peer reviewed by doctors and pharmacists
                (BPharm and MPharm).</li>
          <li classname="faqs-Q"> Q: How do I change my membership?</li>
          <li> You can change your membership at any time. You can also contact us at</li>
          <li classname="faqs-Q"> Q: How often is the InexaMed database updated with drug information?</li>
          <li> 
              InexaMed is updated during the month following the end of each quarter based on new drugs approved
              by medicine regulatory organisations. In addition, InexaMed frequently adds software enhancements to
              the product line to serve the needs of the medical community.</li>
          <li classname="faqs-Q"> Q: How secure is the patient data?</li>
          <li> A free membership is a membership that is free to use. A paid membership is a membership that is paid to use.</li>
          <li classname="faqs-Q"> Q: Can I log into more than one device at a time?</li>
          <li> Yes, multiple devices can be logged into the same InexaMed account.</li>
      </ul>
    </div>
  </div>
  );
}
