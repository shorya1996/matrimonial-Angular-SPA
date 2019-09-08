import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopeDetailsComponent } from './peope-details.component';

describe('PeopeDetailsComponent', () => {
  let component: PeopeDetailsComponent;
  let fixture: ComponentFixture<PeopeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
