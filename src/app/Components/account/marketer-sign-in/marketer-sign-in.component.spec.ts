import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerSignInComponent } from './marketer-sign-in.component';

describe('MarketerSignInComponent', () => {
  let component: MarketerSignInComponent;
  let fixture: ComponentFixture<MarketerSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
