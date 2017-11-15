import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonInfoComponent } from './add-person-info.component';

describe('AddPersonInfoComponent', () => {
  let component: AddPersonInfoComponent;
  let fixture: ComponentFixture<AddPersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
