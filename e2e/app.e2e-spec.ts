import { TestangularcliPage } from './app.po';

describe('testangularcli App', () => {
  let page: TestangularcliPage;

  beforeEach(() => {
    page = new TestangularcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
