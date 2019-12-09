import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLinkProps, NavLink } from 'react-router-dom';

import renderIcon from '../utils/renderIcon';
import { colors, space } from '@wicara/core';

export interface SidebarSubMenuProps extends NavLinkProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface IconType {
  iconType: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SidebarSubMenu: React.SFC<SidebarSubMenuProps> = ({
  className,
  style,
  icon,
  to,
  exact,
  children,
  ...rest
}) => {
  return (
    <StyledNavLink
      className={className}
      style={style}
      to={to}
      exact={exact}
      activeClassName="is-active"
      {...rest}
    >
      {icon ? (
        <SubMenuInner>
          <SubMenuIcon iconType={typeof icon}>{renderIcon(icon)}</SubMenuIcon>
          <span>{children}</span>
        </SubMenuInner>
      ) : (
        <SubMenuInner>
          <span>{children}</span>
        </SubMenuInner>
      )}
    </StyledNavLink>
  );
};

const SubMenuIcon = styled('span')<IconType>`
  ${props => (props.iconType === 'string' ? 'font-size: 20px' : undefined)};
  margin-right: ${space.space2}px;
  line-height: 1em;
  vertical-align: middle;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 1px;

    path {
      fill: ${colors.gray70};
    }
  }
`;

const SubMenuInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  color: ${colors.gray70};
`;

const BaseStyles = css`
  display: block;
  min-height: 35px;
  padding: 6px 8px;
  color: ${colors.gray70};
  text-decoration: none;
  margin-bottom: ${space.space1}px;
  border: 1px solid transparent;
  border-radius: 6px /* $border-radius-medium */;
  transition: box-shadow 0.3s ease;

  &:hover {
    text-decoration: none;
    background-color: ${colors.gray10};

    ${SubMenuInner} {
      color: ${colors.gray70};
    }
  }

  &:active {
    background-color: ${colors.gray70};
    color: ${colors.white};

    ${SubMenuInner} {
      color: ${colors.white};
    }

    svg {
      path {
        fill: ${colors.white};
      }
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${colors.softKataBlue};
  }

  &.is-active {
    ${SubMenuInner} {
      color: ${colors.kataBlue};
    }

    &:hover {
      background: none;

      ${SubMenuInner} {
        color: ${colors.kataBlue};
      }
    }

    svg {
      path {
        fill: ${colors.kataBlue};
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  ${BaseStyles}
`;

export default SidebarSubMenu;
