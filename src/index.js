import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/handlers/realVhHeight';
import { activateSmoothScroll } from './js/handlers/smoothScroll';
import { renderHtmlInApp } from './js/handlers/appHandler';

activateRealVhHeight();
activateSmoothScroll();

const greeting = '<h1>Hello World!</h1>';

renderHtmlInApp(greeting);
