import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInformComponent } from './my-inform.component';

describe('MyInformComponent', () => {
  let component: MyInformComponent;
  let fixture: ComponentFixture<MyInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
