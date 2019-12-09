import * as React from 'react';
import { Heading } from '@wicara/core';

interface Props {
  className?: string;
}

const SidebarSubHeading: React.FC<Props> = ({ children, className }) => (
  <Heading as="h5" scale="heading5" color="gray50" m={0} className={className}>
    {children}
  </Heading>
);

export default SidebarSubHeading;
