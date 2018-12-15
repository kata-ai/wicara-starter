import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as serviceWorker from './utils/serviceWorker';
import Main from './Main';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
