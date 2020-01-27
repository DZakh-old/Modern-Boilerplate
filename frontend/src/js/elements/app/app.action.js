import { renderHtmlInApp } from './app.handler';

export const writeHelloWorldInApp = () => {
  const phrase = 'Hello World!';

  renderHtmlInApp(phrase);
};
