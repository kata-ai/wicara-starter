import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { KataReset } from '@kata-kit/theme';

import App from './modules/core/App';

const Main: React.SFC = () => (
  <BrowserRouter>
    <KataReset>
      <App />
    </KataReset>
  </BrowserRouter>
);

export default hot(module)(Main);
