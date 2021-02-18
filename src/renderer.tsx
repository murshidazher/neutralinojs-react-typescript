import React from 'react';
import { render } from 'react-dom';
import App from './container/App';

import { AppLib } from './core/lib';

import './index.css';

let appLib = new AppLib();

Neutralino.init({
  load: function () {
    // appLib.showSettings();
  },
  pingSuccessCallback: function () {},
  pingFailCallback: function () {}
});

render(<App />, document.getElementById('root'));
