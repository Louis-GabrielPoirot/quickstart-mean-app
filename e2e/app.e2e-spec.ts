import { MeanQuickstartPage } from './app.po';

describe('mean-quickstart App', function() {
  let page: MeanQuickstartPage;

  beforeEach(() => {
    page = new MeanQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
