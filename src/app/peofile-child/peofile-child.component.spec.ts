import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeofileChildComponent } from './peofile-child.component';

describe('PeofileChildComponent', () => {
  let component: PeofileChildComponent;
  let fixture: ComponentFixture<PeofileChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeofileChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeofileChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
