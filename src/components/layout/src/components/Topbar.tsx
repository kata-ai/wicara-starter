import * as React from 'react';
import styled from 'styled-components';

import { breakpoints, colors } from '@wicara/core';

export interface TopbarProps {
  /** Left-side content of the topbar */
  logoContent?: React.ReactNode;
  /** Left-side content of the topbar */
  leftContent?: React.ReactNode;
}

const Topbar: React.SFC<TopbarProps> = ({
  logoContent,
  leftContent,
  children
}) => (
  <Root>
    {logoContent && <TopbarLogo>{logoContent}</TopbarLogo>}
    {leftContent && <TopbarLeft>{leftContent}</TopbarLeft>}
    {children && <TopbarRight>{children}</TopbarRight>}
  </Root>
);

export default Topbar;

const TopbarLogo = styled('div')`
  flex: 0 0 auto;
`;

const TopbarLeft = styled('div')`
  flex: 1 1 auto;
  padding-left: 12px;
`;

const TopbarRight = styled('div')`
  flex: 0 0 auto;
  margin-left: 24px;
  padding-right: 24px;

  @media (min-width: ${breakpoints.md}px) {
    padding-right: 40px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding-right: 48px;
  }
`;

const Root = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${colors.white};
  color: ${colors.gray80};
  border-bottom: 1px solid ${colors.gray30};
  z-index: 200;
`;
