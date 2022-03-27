import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinCardComponent } from './shoppin-card.component';

describe('ShoppinCardComponent', () => {
  let component: ShoppinCardComponent;
  let fixture: ComponentFixture<ShoppinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
