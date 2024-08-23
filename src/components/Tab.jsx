import React, { forwardRef } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  min-height: 100vh;
  background-color: #010302;
  z-index: 1;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    height: 200px;
    width: 100vw;
    background: linear-gradient(to top, #010302, transparent);
    content: "";
    bottom: 100%;
    left: 0;
  }

  &.tab1 {
    background: linear-gradient(
        to top,
        #010302 0%,
        transparent 20%,
        #010302 80%
      ),
      url(https://github.com/HoanghoDev/landing_page_design/blob/main/images/tab1.jpg?raw=true);
  }

  &.tab2 {
    background: linear-gradient(
        to top,
        #010302 0%,
        transparent 20%,
        #010302 80%
      ),
      url(https://github.com/HoanghoDev/landing_page_design/blob/main/images/tab2.jpg?raw=true);
  }
`;

const Content = styled.div`
  width: ${props => props.className === 'tab1' ? '700px' : '900px'};
  max-width: 90%;
  color: #eee;
  ${props => props.className === 'tab2' && `
    padding: 17px;
    box-shadow: 0 0 25px #d1c3ae;
  `}
`;

const Tab = forwardRef(({ className, title, content }, ref) => {
  return (
    <TabContainer ref={ref} className={className}>
      <Content className={className}>
        <h2>{title}</h2>
        <div className="des">
          {Array.isArray(content) 
            ? content.map((paragraph, index) => <div key={index}>{paragraph}</div>)
            : <div>{content}</div>
          }
        </div>
      </Content>
    </TabContainer>
  );
});

export default Tab;