import React, { Component } from 'react'

import '../styles/footer.css'
import logoGithub from '../img/logo_github.png';
import logoGmail from '../img/logo_gmail.png';
import logoLinkedIn from '../img/logo_linkedin.png';
import logoWhatsApp from '../img/logo_whatsapp.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="contact-container">
          <h3>Cássio Pereira</h3>
          <ul className="links-container">
            <li><a 
              href="https://api.whatsapp.com/send?phone=5592988134763"
              target="_blank" 
              rel="noreferrer"><img 
                src={ logoWhatsApp } 
                alt="WhatsApp Logo" 
                width="40px" /></a></li>
            <li><a 
              href="mailto:cassiorodp@gmail.com?subject=Would you like to hire me, please?"
              target="_blank"
              rel="noreferrer"><img 
                src={ logoGmail }
                alt="Gmail Logo" 
                width="40px" /></a></li>
            <li><a 
              href="https://github.com/cassiorodp/" 
              target="_blank" 
              rel="noreferrer"><img 
                src={ logoGithub }
                alt="GitHub Logo" 
                width="40px" /></a></li>
            <li><a 
              href="https://www.linkedin.com/in/cassio-rodrigues-pereira/" 
              target="_blank" 
              rel="noreferrer"><img
                src={ logoLinkedIn }
                alt="LinkedIn Logo"
                width="40px" /></a></li>
          </ul>
        </section>
        <section className="contact-container">
          <h3>Murilo Rainho</h3>
          <ul className="links-container">
            <li><a 
              href="https://wa.me/5518996381996"
              target="_blank" 
              rel="noreferrer"><img 
                src={ logoWhatsApp } 
                alt="WhatsApp Logo" 
                width="40px" /></a></li>
            <li><a 
              href="mailto:murilorainho01@gmail.com?subject=Would you like to hire me, please?"
              target="_blank" 
              rel="noreferrer"><img 
                src={ logoGmail }
                alt="Gmail Logo" 
                width="40px" /></a></li>
            <li><a 
              href="https://github.com/Murilo-Rainho/" 
              target="_blank" 
              rel="noreferrer"><img 
                src={ logoGithub }
                alt="GitHub Logo" 
                width="40px" /></a></li>
            <li><a 
              href="www.linkedin.com/in/murilo-rainho" 
              target="_blank" 
              rel="noreferrer"><img
                src={ logoLinkedIn }
                alt="LinkedIn Logo"
                width="40px" /></a></li>
          </ul>
        </section>
      </footer>
    )
  }
}

export default Footer;
