import * as React from 'react';
import styled from 'styled-components';
import { colors, space } from '@wicara/core';

export interface SidebarSubProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {
  titleElement?: React.ReactNode;
  hasTop?: boolean;
  collapsed?: boolean;
}

const SidebarSub: React.SFC<SidebarSubProps> = ({
  className,
  style,
  titleElement,
  children,
  ...rest
}) => (
  <div className={className} style={style} {...rest}>
    {titleElement ? titleElement : null}
    <SubContent>{children}</SubContent>
  </div>
);

export default styled(SidebarSub)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: ${space.space8}px;
  padding: ${space.space3}px ${space.space2}px;
  background: ${colors.white};
  border-right: 1px solid ${colors.gray30};
`;

const SubContent = styled('div')`
  padding: 0;
`;
