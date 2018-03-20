import { AppPage } from './app.po';

describe('cleanang App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('This is a RESTful example of pulling a list of data from MongoDB and showing it on the page. You can add or remove items from the list as well using the included form.');
  });
});
