import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuOrderListComponent } from './eu-order-list.component';

describe('EuOrderListComponent', () => {
  let component: EuOrderListComponent;
  let fixture: ComponentFixture<EuOrderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuOrderListComponent]
    });
    fixture = TestBed.createComponent(EuOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
