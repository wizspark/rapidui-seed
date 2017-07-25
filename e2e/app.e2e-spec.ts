import { RapidSeedPage } from './app.po';

describe('rapid-seed App', () => {
  let page: RapidSeedPage;

  beforeEach(() => {
    page = new RapidSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
