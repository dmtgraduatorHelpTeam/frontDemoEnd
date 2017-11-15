import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonInfoComponent } from './search-person-info.component';

describe('SearchPersonInfoComponent', () => {
  let component: SearchPersonInfoComponent;
  let fixture: ComponentFixture<SearchPersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
