import { NgUdemyExercisesPage } from './app.po';

describe('ng-udemy-exercises App', () => {
  let page: NgUdemyExercisesPage;

  beforeEach(() => {
    page = new NgUdemyExercisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
