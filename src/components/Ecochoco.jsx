import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Tab from './Tab';
// import Navigation from './Navigation';
import GlobalStyle from './GlobalStyle';
import Navbar from './Navbar';

const Container = styled.div`
  overflow: hidden;
  height: max-content;
`;

function App() {
  const containerRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const scrollSpeed = 0.2;
      const scrollValue = window.scrollY + (event.deltaY / 3) * scrollSpeed;
      window.scrollTo(0, scrollValue);

      // Add scroll animation logic here
      // This will be similar to the JavaScript in the original code,
      // but adapted to use React refs and state
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Container ref={containerRef}>
        <Banner />
        <Tab
          ref={(el) => (tabsRef.current[0] = el)}
          className="tab1"
          title="Indulge in the Forbidden Temptation. Discover the art of chocolate, crafted to perfection"
          content="At Forbidden Temptation, we believe that true indulgence should be guilt-free, not just for you but for the planet as well. Our commitment to sustainability begins with our packaging. Each box, wrapper, and ribbon is crafted from recyclable and biodegradable materials, carefully selected to minimize our environmental impact. We strive to reduce waste and encourage a greener future, so you can savor every bite knowing you're making a positive choice for the earth."
        />
        <Tab
          ref={(el) => (tabsRef.current[1] = el)}
          className="tab2"
          title="Pure Indulgence, Pure Responsibility"
          content={[
            "Quality is at the heart of everything we do. Our chocolates are handcrafted by master chocolatiers who blend traditional techniques with innovative flavors. From the careful selection of the finest cocoa beans to the meticulous crafting of each piece, we ensure that every creation reflects our passion for perfection. At Forbidden Temptation, each chocolate is more than a treat—it's a testament to our dedication to excellence and the art of chocolate-making.",
            "Indulgence doesn't have to come at the cost of your well-being. We are dedicated to using only the highest quality natural ingredients, free from artificial preservatives and additives. Our chocolates are thoughtfully created to offer a balance of rich flavors and mindful ingredients, allowing you to enjoy a luxurious experience that aligns with your health-conscious lifestyle. With Forbidden Temptation, you can savor the pleasure of chocolate, knowing it's crafted with your health in mind.",
            "Experience chocolate that feels as good as it tastes. With Forbidden Temptation, you're not just enjoying a treat—you're savoring a sustainable future"
          ]}
        />
      </Container>
    </>
  );
}

export default App;