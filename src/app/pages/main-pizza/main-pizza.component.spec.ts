import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPizzaComponent } from './main-pizza.component';

describe('MainPizzaComponent', () => {
  let component: MainPizzaComponent;
  let fixture: ComponentFixture<MainPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
