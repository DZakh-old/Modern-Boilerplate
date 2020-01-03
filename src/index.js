import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/helpers/realVhHeight';
import { activateSmoothScroll } from './js/helpers/smoothScrollTo';

import { renderHtmlInApp } from './js/handlers/appHandler';

activateRealVhHeight();
activateSmoothScroll();

const greeting = '<h1>Hello World!</h1>';

renderHtmlInApp(greeting);
