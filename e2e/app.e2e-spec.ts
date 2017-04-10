import { Angular4EnvSpecificPage } from './app.po';

describe('angular4-env-specific App', () => {
  let page: Angular4EnvSpecificPage;

  beforeEach(() => {
    page = new Angular4EnvSpecificPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
