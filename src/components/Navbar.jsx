// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowSpinner = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000);
  };

  return (
    <>
      <nav>
        <img src="./lo.png" className="logo" width="100" alt="Logo" />
        <ul id="menu" className={showMenu ? 'show' : ''}>
          <li>
            <Link to="/" onClick={handleShowSpinner}>HOME</Link>
          </li>
          <li>
            <Link to="/ft-corner" onClick={handleShowSpinner}>F&T CORNER</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleShowSpinner}>ABOUT</Link>
          </li>
          <li>
            <Link to="/ecochoco" onClick={handleShowSpinner}>ECOCHOCO</Link>
          </li>
          <li>
            <Link to="/shop" onClick={handleShowSpinner}>SHOP</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleShowSpinner}>CONTACT</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
