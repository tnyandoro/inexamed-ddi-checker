import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/aboutus">About InexaMed</a>
        </li>
        <li>
          <a href="/interactions">Interactions</a>
        </li>
        <li>
          <a href="/pregnancy">Pregnancy</a>
        </li>
        <li>
          <a href="/references">References</a>
        </li>
        <li>
          <a href="/faqs">FAQs</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
