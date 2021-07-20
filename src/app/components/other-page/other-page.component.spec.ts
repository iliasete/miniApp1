import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPAgeComponent } from './other-page.component';

describe('OtherPAgeComponent', () => {
  let component: OtherPAgeComponent;
  let fixture: ComponentFixture<OtherPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
