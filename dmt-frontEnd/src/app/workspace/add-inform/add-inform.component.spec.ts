import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformComponent } from './add-inform.component';

describe('AddInformComponent', () => {
  let component: AddInformComponent;
  let fixture: ComponentFixture<AddInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
