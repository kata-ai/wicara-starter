import * as React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';
import { space } from '@wicara/core';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  collapsed?: boolean;
  hasTop?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({
  className,
  style,
  collapsed,
  hasTop,
  children,
  ...rest
}) => {
  return (
    <div className={className} style={style} {...rest}>
      <Inner collapsed={collapsed} hasTop={hasTop}>
        <Scrollbars>
          {React.Children.map(children, Item => {
            const currentItem = Item as React.ReactElement;

            if (currentItem && currentItem.type) {
              const sidebars = ['SidebarMain', 'SidebarSub'].some(
                type => type === currentItem.type
              );

              if (sidebars) {
                return React.cloneElement(currentItem, {
                  hasTop,
                  collapsed
                });
              }

              return Item;
            }
          })}
        </Scrollbars>
      </Inner>
    </div>
  );
};

export default styled(Sidebar)`
  display: flex;
  position: relative;
  flex: 0 0 ${props => (props.collapsed ? space.space8 : 280)}px;
  background: #ffffff;
`;

const Inner = styled('div')<SidebarProps>`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => (props.collapsed ? space.space8 : 280)}px;
  z-index: 100;

  ${props => (props.hasTop ? 'top: 64px;' : '')}
`;
