import { AboutMePage } from './app.po';

describe('about-me App', () => {
  let page: AboutMePage;

  beforeEach(() => {
    page = new AboutMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
