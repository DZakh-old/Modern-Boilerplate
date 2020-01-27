import { renderHtmlInContainer } from '../../helpers/render-helpers';

const app = document.getElementById('app');

export const toggleAppState = () => {
  app.classList.toggle('active');
};

export const isAppActive = () => !!app.classList.contains('active');

export const renderHtmlInApp = html => {
  renderHtmlInContainer(html, app);
};
