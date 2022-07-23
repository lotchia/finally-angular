import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollectionproductComponent } from './addcollectionproduct.component';

describe('AddcollectionproductComponent', () => {
  let component: AddcollectionproductComponent;
  let fixture: ComponentFixture<AddcollectionproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcollectionproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcollectionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
