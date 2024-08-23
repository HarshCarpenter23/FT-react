import React, { useState, useEffect } from 'react';
import './FTCorner.css';
import Navbar from './Navbar';

const images = [
  "https://www.halfbakedharvest.com/wp-content/uploads/2024/02/Toasted-Coconut-Chocolate-Bars-1.jpg",
  "https://bluebowlrecipes.com/wp-content/uploads/2021/12/black-forest-truffles-4404-683x1024.jpg",
  "https://static01.nyt.com/images/2014/05/01/dining/dippingchocolate/dippingchocolate-superJumbo.jpg",
  "https://d4pmlgzenkweq.cloudfront.net/3zylanvmc0hb75qcb74jmqsm5uev",
  "https://s.wsj.net/public/resources/images/BN-XJ209_CHOCOL_TOP_20180207105719.jpg"
];

const FTCorner = () => {
  const [itemActive, setItemActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [itemActive]);

  const handleNext = () => {
    setItemActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setItemActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <div className="hero-ft">
        <Navbar />
      </div>

      <div className="container-ft">
        <div className="slider-ft">
          <div className="list-ft">
            {images.map((src, index) => (
              <div key={index} className={`item-ft ${itemActive === index ? 'active-ft' : ''}`}>
                <img src={src} alt="" />
                <div className="content-ft">
                  <p>{index === 0 ? "Give in to the Dark Side of Chocolate" : index === 1 ? "Temptation Never Tasted So Sweet" : index === 2 ? "Surrender to Irresistible Bliss" : index === 3 ? "Forbidden Pleasure, Unlocked in Every Bite" : "Forget love ... I'd rather fall in love with chocolate!"}</p>
                  <h2></h2>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
          <div className="arrows-ft">
            <button onClick={handlePrev}>{'<'}</button>
            <button onClick={handleNext}>{'>'}</button>
          </div>
          <div className="thumbnail-ft">
            {images.map((src, index) => (
              <div key={index} className={`item-ft ${itemActive === index ? 'active-ft' : ''}`} onClick={() => handleThumbnailClick(index)}>
                <img src={src} alt="" />
                <div className="content-ft">{index === 0 ? "L" : index === 1 ? "O" : index === 2 ? "V" : index === 3 ? "E" : "@ FT"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default FTCorner;
