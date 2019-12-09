import * as React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';
import { colors, space } from '@wicara/core';

export interface SidebarMainProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {
  logo?: string;
  hasTop?: boolean;
  collapsed?: boolean;
}

const SidebarMain: React.SFC<SidebarMainProps> = ({
  className,
  style,
  logo,
  hasTop,
  children,
  ...rest
}) => (
  <div className={className} style={style} {...rest}>
    {logo && <Logo src={logo} alt="Kata.ai" />}
    <Scrollbars>{children}</Scrollbars>
  </div>
);

export default styled(SidebarMain)`
  width: ${space.space8}px;
  padding: ${space.space3}px ${space.space1}px;
  background-color: ${colors.gray80};
  color: ${colors.gray60};
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  padding-top: 17px;
  user-select: none;
  ${props => (props.hasTop ? 'top: 64px;' : '')}

  a {
    color: ${colors.gray60};
  }
`;

const Logo = styled('img')`
  margin-bottom: ${space.space3}px;
`;
