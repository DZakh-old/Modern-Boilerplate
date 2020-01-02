import './stylesheets/main.scss';

import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/helpers/realVhHeight';
import { activateSmoothScroll } from './js/helpers/smoothScrollTo';

import { activateInterface } from './js/handlers/interfaceHandler';

activateRealVhHeight();
activateSmoothScroll();

activateInterface();
