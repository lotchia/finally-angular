import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductincollectionComponent } from './productincollection.component';

describe('ProductincollectionComponent', () => {
  let component: ProductincollectionComponent;
  let fixture: ComponentFixture<ProductincollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductincollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductincollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
