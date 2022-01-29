import React from 'react';
import './Footer.css';
import githubMark from '../../../assets/images/github-mark-light-32.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>2022 Matthew Gammon</p>
      </div>
      <div className="footer-image">
        <a
          href="https://github.com/MatthewGammon/Albion-Player-Info"
          target="_blank"
        >
          <img
            src={githubMark}
            alt="github-mark-light"
            className="github"
            height={32}
            width={32}
          />
        </a>
      </div>
    </footer>
  );
}
