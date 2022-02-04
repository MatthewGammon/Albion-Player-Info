import React from 'react';
import './NotFound.css';
import albionLogo from '../../../assets/images/logos/albion-logo.png';

export default function NotFound() {
  return (
    <div className="not-found-error">
      <h1>404: Page Not Found!</h1>
      <p>This page either does not exist or is currently unavailable.</p>
      <img src={albionLogo} alt="albion online logo" />
    </div>
  );
}
