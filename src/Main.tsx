import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { WicaraReset } from '@wicara/core';

import App from './modules/core/App';

const Main: React.FC = () => (
  <BrowserRouter>
    <WicaraReset>
      <App />
    </WicaraReset>
  </BrowserRouter>
);

export default Main;
