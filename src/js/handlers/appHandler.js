import { renderHtmlInContainer } from '../helpers/renderHelpers';

import { elements } from '../utils/appElements';

const { app } = elements;

export const toggleAppState = () => {
  app.classList.toggle('active');
};

export const isAppActive = () => !!app.classList.contains('active');

export const renderHtmlInApp = html => {
  renderHtmlInContainer(app, html);
};
