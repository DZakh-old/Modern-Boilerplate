import './stylesheets/main.scss';

import '@babel/polyfill';

// import './js/helpers';
import './js/packages/lazysizes';

import { realVhHeight, activateSmoothScroll } from './js/functions';

import Interface from './js/classes/Interface';

realVhHeight();
activateSmoothScroll();

Interface.activate();
