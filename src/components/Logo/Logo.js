import React, { Component } from 'react';
import logo from "../../assets/logo.jpeg";
import "./Logo.css";

export default function Logo() {
    return (
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
    );
  }