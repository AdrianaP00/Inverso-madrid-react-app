import React, { useState } from 'react';
import { FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';

import { Newsletter, Modal } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import getSection from "../../services/getSection";

const data = await getSection("footer-section");

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app__footer section__padding" id="login">
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans"><FiMapPin /> {data.Location}</p>
          <p className="p__opensans"><FiPhone /> {data.Phone}</p>
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
          <p className="p__opensans">{data.OpenTime1Text}</p>
          <p className="p__opensans">{data.OpenTime1Time}</p>
          <p className="p__opensans">{data.OpenTime2Text}</p>
          <p className="p__opensans">{data.OpenTime2Time}</p>
          <p className="p__opensans">{data.OpenTime3Text}</p>
          <p className="p__opensans">{data.OpenTime3Time}</p>
        </div>
      </div>


      <div className="footer__copyright">
        <p className="p__opensans">inverso&nbsp;@2023  All Rights reserved.</p>
        <p className="p__opensans">Created By <a href='https://github.com/Sojobo-tech'>Sojobo-tech.</a></p>
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
