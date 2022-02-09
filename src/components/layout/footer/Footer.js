import React from 'react';
import './Footer.css';
import githubMark from '../../../assets/images/logos/github-mark-light-32.png';
import linkedInBug from '../../../assets/images/logos/LI-In-Bug.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h6 className="footer-about-header">About this app</h6>
        <p>
          This project is being developed by an aspiring developer as a hobby
          project and is not intended to compete with similar sites.
        </p>
        <p>
          Please support the community and the awesome people who keep those
          sites running!
        </p>
      </div>
      <div className="footer-community">
        <h6 className="footer-community-header">Support the Community</h6>
        <p>
          <a
            href="https://albiononline.com/en/home"
            target="_blank"
            rel="noreferrer"
          >
            Albion Online Official
          </a>
        </p>
        <p>
          <a
            href="https://www.albiononline2d.com/"
            target="_blank"
            rel="noreferrer"
          >
            Albion Online 2D
          </a>
        </p>
        <p>
          <a href="https://albionbattles.com/" target="_blank" rel="noreferrer">
            Albion Battles
          </a>
        </p>
        <p>
          <a href="https://murderledger.com/" target="_blank" rel="noreferrer">
            Murder Ledger
          </a>
        </p>
      </div>
      <div className="footer-contact">
        <h6 className="footer-contact-header">Contact</h6>
        <p className="footer-email">matthewgammondev@gmail.com</p>
        <div className="footer-contact-links">
          <a
            href="https://github.com/MatthewGammon/Albion-Player-Info"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubMark}
              alt="github-mark-light"
              height={32}
              width={32}
            />
          </a>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/matthew--gammon/"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={linkedInBug} alt="LinkedIn Bug" height={32} width={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
