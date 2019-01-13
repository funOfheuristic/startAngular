import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowComponent } from './cow.component';

describe('CowComponent', () => {
  let component: CowComponent;
  let fixture: ComponentFixture<CowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
