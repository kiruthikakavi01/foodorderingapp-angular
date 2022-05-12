import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVegComponent } from './list-veg.component';

describe('ListVegComponent', () => {
  let component: ListVegComponent;
  let fixture: ComponentFixture<ListVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
