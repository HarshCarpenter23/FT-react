import React from 'react';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const BannerContainer = styled.div`
  height: 50vw;
  position: relative;
  overflow: hidden;
`;

const BannerBackground = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-position: center bottom;
  transition: 0.1s;
  background-image: ${props => `url(${props.image})`};
`;

const BannerTitle = styled.div`
  position: absolute;
  top: 32%;
  width: 100%;
  text-align: center;
  color: #d1c3ae;
  text-shadow: 0 0px 20px #d2af76;

  h5 {
    font-size: 50px;
    margin: 0;
  }

  h2 {
    font-size: 11vw;
    margin: 0;
  }
`;

const ScrollIcon = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  font-size: 24px;
  color: #fff;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-15px); }
    60% { transform: translateY(-7px); }
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerBackground image="https://github.com/HoanghoDev/landing_page_design/blob/main/images/banner_0.png?raw=true" />
      <BannerBackground image="https://github.com/HoanghoDev/landing_page_design/blob/main/images/banner_1.png?raw=true" />
      <BannerTitle>
        <h5>Welcome to the Land of</h5>
        <h2>F&T</h2>
      </BannerTitle>
      <BannerBackground image="https://github.com/HoanghoDev/landing_page_design/blob/main/images/banner_2.png?raw=true" />
      <BannerBackground image="https://github.com/HoanghoDev/landing_page_design/blob/main/images/banner_3.png?raw=true" />
      <ScrollIcon>
        <BsChevronDown />
      </ScrollIcon>
    </BannerContainer>
  );
}

export default Banner;