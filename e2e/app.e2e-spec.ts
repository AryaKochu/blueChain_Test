import { BluechainPage } from './app.po';

describe('bluechain App', function() {
  let page: BluechainPage;

  beforeEach(() => {
    page = new BluechainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
