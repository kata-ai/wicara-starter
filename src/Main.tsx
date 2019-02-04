import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { KataReset } from '@kata-kit/reset';

import App from './modules/core/App';

const Main: React.FC = () => (
  <BrowserRouter>
    <KataReset>
      <App />
    </KataReset>
  </BrowserRouter>
);

export default hot(module)(Main);
