import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import "../footer/footer.css"

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='date'>
        <a href="http://mail.google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> mifabricadeideassalta@gmail.com
        </a>

        <a href="https://www.google.com/maps/dir/-24.7861953,-65.4148733/mi+fabrica+de+ideas+salta/@-24.7861871,-65.4174345,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x941bc3b2906fadbf:0x87566105387c17a!2m2!1d-65.4149005!2d-24.7861745?entry=ttu"
           target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLocationDot} /> 25 de Mayo N°249 "A"
        </a>
      </div>
      <div className='feed'>
        <a href="https://www.instagram.com/3dmifabricadeideas/" target="_blank" rel="noopener noreferrer">
          < FontAwesomeIcon icon={faInstagram} className='icon' />
        </a>
        <a href="https://www.facebook.com/mifabricadeideas" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
