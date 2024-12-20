import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" loading="lazy" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#carta">carta</a>
        </li>
        <li className="p__opensans">
          <a href="https://www.localismart.it/intensomadrid/prenota">Reserva</a>
        </li>
      </ul>
      {/* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>*/}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#cocktail" onClick={() => setToggleMenu(false)}>
                  COCKTAILS
                </a>
              </li>
              <li>
                <a href="#caprichos" onClick={() => setToggleMenu(false)}>
                  CAPRICHOS
                </a>
              </li>
              <li>
                <a href="#tapa" onClick={() => setToggleMenu(false)}>
                  TAPAS
                </a>
              </li>
              <li>
                <a href="#montanare" onClick={() => setToggleMenu(false)}>
                  MONTANARE
                </a>
              </li>
              <li>
                <a href="#dolce" onClick={() => setToggleMenu(false)}>
                  DOLCE
                </a>
              </li>
              <li>
                <a href="#bebidas" onClick={() => setToggleMenu(false)}>
                  BEBIDAS
                </a>
              </li>
              <li>
                <a href="#Prosecco" onClick={() => setToggleMenu(false)}>
                  PROSECCO
                </a>
              </li>

              <li>
                <a
                  href="https://www.localismart.it/intensomadrid/prenota"
                  onClick={() => setToggleMenu(false)}
                >
                  Reserva una mesa
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
