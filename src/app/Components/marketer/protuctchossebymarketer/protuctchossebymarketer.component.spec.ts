import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtuctchossebymarketerComponent } from './protuctchossebymarketer.component';

describe('ProtuctchossebymarketerComponent', () => {
  let component: ProtuctchossebymarketerComponent;
  let fixture: ComponentFixture<ProtuctchossebymarketerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtuctchossebymarketerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtuctchossebymarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
