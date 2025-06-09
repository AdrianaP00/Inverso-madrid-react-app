import React, { useState } from 'react';
import { FiInstagram, FiMapPin } from 'react-icons/fi';

import { Newsletter, Modal } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app__footer section__padding" id="login">
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans"><FiMapPin />C. de Menorca, 19, 28009 Madrid</p>
          <p className="p__opensans">+34 604827013</p>
      </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" loading="lazy"/>
          <p className="p__opensans">The italian that you need</p>
          <img src={images.spoon} alt="spoon_logo" className="spoon__img" style={{ marginTop: 15 }} loading="lazy"/>
          <div className="app__footer-links_icons">
            <a href='https://www.instagram.com/inverso.madrid/'><FiInstagram /></a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Nuestros Horarios</h1>
          <p className="p__opensans">Martes - Miércoles - Jueves: </p>
          <p className="p__opensans"> 15:00 - 00:30 </p>
          <p className="p__opensans">Viernes - Sábado: </p>
          <p className="p__opensans"> 13:30 - 01:30 </p>
          <p className="p__opensans"> Domingo - Lunes: </p>
          <p className="p__opensans"> Cerrado </p>
        </div>
      </div>


      <div className="footer__copyright">
        <p className="p__opensans">inverso&nbsp;@2023  All Rights reserved.</p>
        <p className="p__opensans">Created By <a href='https://github.com/AdrianaP00'>AdrianaP00.</a></p>
      </div>
      
      <div className="app">
        <div className="app__footer-links">
          <button className="app__footer-links_legal a" onClick={() => setShowModal(true)}>
            &nbsp;Copyright&nbsp;&amp;&nbsp;Disclaimer
          </button>
        </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>

    </div>
  );
};

export default Footer;
