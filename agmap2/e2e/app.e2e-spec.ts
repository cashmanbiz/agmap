import { Agmap2Page } from './app.po';

describe('agmap2 App', () => {
  let page: Agmap2Page;

  beforeEach(() => {
    page = new Agmap2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
