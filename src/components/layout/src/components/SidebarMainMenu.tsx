import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { colors, space } from '@wicara/core';

import renderIcon from '../utils/renderIcon';

export interface SidebarMainMenuProps extends NavLinkProps {
  className?: string;
  style?: React.CSSProperties;
  icon: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface IconType {
  iconType: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SidebarMainMenu: React.SFC<SidebarMainMenuProps> = ({
  className,
  style,
  icon,
  to,
  exact,
  children,
  ...rest
}) => {
  return (
    <RootNavLink
      className={className}
      style={style}
      to={to}
      exact={exact}
      activeClassName="is-active"
      {...rest}
    >
      <IconWrapper iconType={typeof icon}>{renderIcon(icon)}</IconWrapper>
      <Span>{children}</Span>
    </RootNavLink>
  );
};

const IconWrapper = styled('div')<IconType>`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: calc(${space.space1}px / 2);
  padding: ${props => (props.iconType === 'string' ? '10px' : '4px')};
  font-size: 20px;
  color: ${colors.gray60};
  border-radius: 4px /* $border-radius-small */;

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: ${colors.gray60};
    }
  }
`;

const Span = styled('span')`
  color: ${colors.gray60};
`;

const BaseStyles = css`
  padding: ${space.space1}px 0;
  font-size: 12px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.gray60};

    & ${IconWrapper} {
      svg {
        path {
          fill: ${colors.gray50};
        }
      }

      background-color: ${colors.gray70};
      color: ${colors.gray50};
    }
  }

  &:focus {
    outline: 0;
  }

  &.is-active {
    ${Span} {
      color: ${colors.white};
    }

    ${IconWrapper} {
      svg {
        path {
          fill: ${colors.white};
        }
      }

      background-color: ${colors.kataBlue};
      color: ${colors.white};
    }
  }
`;

const RootNavLink = styled(NavLink)`
  ${BaseStyles}
`;

export default SidebarMainMenu;
