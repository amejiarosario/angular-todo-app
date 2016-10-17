import { Todos2Page } from './app.po';

describe('todos2 App', function() {
  let page: Todos2Page;

  beforeEach(() => {
    page = new Todos2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
