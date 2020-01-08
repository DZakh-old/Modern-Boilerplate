import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/functions/realVhHeight';
import { activateSmoothScroll } from './js/functions/smoothScroll';

import { renderHtmlInApp } from './js/handlers/appHandler';

activateRealVhHeight();
activateSmoothScroll();

const greeting = '<h1>Hello World!</h1>';

renderHtmlInApp(greeting);
