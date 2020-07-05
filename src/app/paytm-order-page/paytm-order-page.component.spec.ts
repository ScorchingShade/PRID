import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytmOrderPageComponent } from './paytm-order-page.component';

describe('PaytmOrderPageComponent', () => {
  let component: PaytmOrderPageComponent;
  let fixture: ComponentFixture<PaytmOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytmOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
