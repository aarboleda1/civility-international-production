import { CivilityInternationalProductionPage } from './app.po';

describe('civility-international-production App', function() {
  let page: CivilityInternationalProductionPage;

  beforeEach(() => {
    page = new CivilityInternationalProductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
