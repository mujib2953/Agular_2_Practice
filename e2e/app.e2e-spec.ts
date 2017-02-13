import { Angular2GuidePage } from './app.po';

describe('angular2-guide App', function() {
  let page: Angular2GuidePage;

  beforeEach(() => {
    page = new Angular2GuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
