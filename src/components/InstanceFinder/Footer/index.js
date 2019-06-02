import React from 'react';
import StyledFooter from './StyledFooter';
import HomePageLink from './HomePageLink';

const Footer = props => (
  <StyledFooter {...props}>
    <HomePageLink href="https://egodact.com" target="_blank">
      egodact.com
    </HomePageLink>
  </StyledFooter>
);

export default Footer;
