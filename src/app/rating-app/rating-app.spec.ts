import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingApp } from './rating-app';

describe('RatingApp', () => {
  let component: RatingApp;
  let fixture: ComponentFixture<RatingApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
