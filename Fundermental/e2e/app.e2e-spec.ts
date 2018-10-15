import { FundermentalPage } from './app.po';

describe('fundermental App', function() {
  let page: FundermentalPage;

  beforeEach(() => {
    page = new FundermentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
