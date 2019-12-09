import * as React from 'react';
import { Heading } from '@wicara/core';

interface Props {
  className?: string;
}

const SidebarSubTitle: React.FC<Props> = ({ children, className }) => (
  <Heading as="h2" scale="heading2" mt={0} mb="md" className={className}>
    {children}
  </Heading>
);

export default SidebarSubTitle;
