import { AutorisationPage } from './app.po';

describe('autorisation App', () => {
  let page: AutorisationPage;

  beforeEach(() => {
    page = new AutorisationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
