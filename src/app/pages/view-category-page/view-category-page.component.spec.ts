import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryPageComponent } from './view-category-page.component';

describe('ViewCategoryPageComponent', () => {
  let component: ViewCategoryPageComponent;
  let fixture: ComponentFixture<ViewCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
