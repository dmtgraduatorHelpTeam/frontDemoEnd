import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSalaryEducationInfoComponent } from './search-salary-education-info.component';

describe('SearchSalaryEducationInfoComponent', () => {
  let component: SearchSalaryEducationInfoComponent;
  let fixture: ComponentFixture<SearchSalaryEducationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSalaryEducationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSalaryEducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
