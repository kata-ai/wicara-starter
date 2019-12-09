import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import KataLogo from 'assets/images/logo.svg';

const Logo: React.SFC = () => {
  return (
    <StyledNavLink exact to="/">
      <Root>
        <img src={KataLogo} alt="Kata.ai" />
      </Root>
    </StyledNavLink>
  );
};

export default Logo;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
`;

const Root = styled('div')`
  width: 64px;
  height: 100%;
  text-align: center;

  img {
    display: inline-block;
  }
`;
