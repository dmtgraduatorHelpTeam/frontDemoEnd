import { DmtFrontEndPage } from './app.po';

describe('dmt-front-end App', () => {
  let page: DmtFrontEndPage;

  beforeEach(() => {
    page = new DmtFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
