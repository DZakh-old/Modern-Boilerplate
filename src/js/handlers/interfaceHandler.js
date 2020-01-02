import { renderHtmlInApp } from './appHandler';

export const activateInterface = () => {
  const greeting = '<h1>Hello World!</h1>';

  renderHtmlInApp(greeting);
};
